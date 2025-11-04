import { useAppForm } from '../../Form/hooks';
import z from 'zod';
import ErrorMessage from '../../Form/ErrorMessage';

const status = ['lead', 'active', 'past'];

const ClientSchema = z.object({
	name: z.string().min(2, 'Name is required'),
	company: z.string().optional(),
	email: z
		.string()
		.email('Valid email required')
		.optional()
		.or(z.literal('')),
	status: z.enum(status),
	notes: z.string().optional(),
});

function FieldError({ field }) {
	const error = field.state.meta.errors?.[0];
	if (!error) return null;
	return <p className="text-sm text-red-600 mt-1">{error}</p>;
}

export default function ClientForm({ initialValues, onSubmit, onCancel }) {
	const form = useAppForm({
		defaultValues: initialValues ?? {
			name: '',
			company: '',
			email: '',
			status: 'lead',
			notes: '',
		},
		onSubmit: async ({ value }) => {
			const parsed = ClientSchema.safeParse(value);
			if (!parsed.success) return;
			await onSubmit(parsed.data);
		},
	});
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				form.handleSubmit();
			}}
			className="space-y-3"
		>
			<form.AppField name="name">
				{(field) => (
					<>
						<field.TextField label="Name" placeholder="Name" />
						<ErrorMessage error={field.state.meta.errors?.[0]} />
					</>
				)}
			</form.AppField>

			<form.AppField name="company">
				{(field) => (
					<>
						<field.TextField
							label="Company"
							placeholder="Company"
						/>
						<ErrorMessage error={field.state.meta.errors?.[0]} />
					</>
				)}
			</form.AppField>

			<form.AppField name="email">
				{(field) => (
					<>
						<field.TextField label="Email" placeholder="Email" />
						<ErrorMessage error={field.state.meta.errors?.[0]} />
					</>
				)}
			</form.AppField>

			<form.AppField name="status">
				{(field) => (
					<>
						<field.SelectField label="Status" options={status} />
						<ErrorMessage error={field.state.meta.errors?.[0]} />
					</>
				)}
			</form.AppField>

			<form.AppField name="notes">
				{(field) => (
					<>
						<field.TextField
							label="Notes"
							placeholder="Enter Notes"
						/>
						<ErrorMessage error={field.state.meta.errors?.[0]} />
					</>
				)}
			</form.AppField>

			<form.AppForm>
				<form.SubmitButton label="submit" />
			</form.AppForm>
		</form>
	);
}
