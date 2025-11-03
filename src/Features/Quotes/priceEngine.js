function emptyPrice() {
	return { oneTime: 0, monthly: 0, lineItems: [] };
}

function mergePrice(base, patch) {
	const out = { ...base };
	if (typeof patch.oneTime === 'number') out.oneTime += patch.oneTime;
	if (typeof patch.monthly === 'number') out.monthly += patch.monthly;
	if (Array.isArray(patch.lineItems))
		out.lineItems = [...out.lineItems, ...patch.lineItems];
	return out;
}

// ✅ single source of truth for phases (prevents typos)
export const CALLBACK_KINDS = Object.freeze([
	'onIndustry',
	'onFeature',
	'onSupportTier',
]);

export function createPriceEngine(config) {
	// Build an empty registry from the allowed kinds
	const registry = CALLBACK_KINDS.reduce((acc, kind) => {
		acc[kind] = [];
		return acc;
	}, {});

	// Allow registering callbacks. If kind isn't known, auto-create to be forgiving.
	function register(kind, cb) {
		if (!registry[kind]) {
			// If you want strict mode, throw instead:
			// throw new Error(`Unknown callback kind "${kind}". Allowed: ${CALLBACK_KINDS.join(", ")}`);
			registry[kind] = [];
		}
		registry[kind].push(cb);
		return api; // chaining
	}

	const order =
		Array.isArray(config?.rulesOrder) && config.rulesOrder.length
			? config.rulesOrder
			: CALLBACK_KINDS; // default order

	function compute(inputs) {
		let result = emptyPrice();

		if (config?.base) {
			result = mergePrice(result, {
				oneTime: config.base.oneTime || 0,
				monthly: config.base.monthly || 0,
				lineItems: [
					{
						label: 'Base Setup',
						amount: config.base.oneTime || 0,
						type: 'oneTime',
					},
					{
						label: 'Base Monthly',
						amount: config.base.monthly || 0,
						type: 'monthly',
					},
				],
			});
		}

		for (const kind of order) {
			const cbs = registry[kind] || [];
			for (const cb of cbs) {
				const patch = cb({ inputs, config, current: result });
				if (patch) result = mergePrice(result, patch);
			}
		}

		return result;
	}

	const api = { register, compute };
	return api;
}
