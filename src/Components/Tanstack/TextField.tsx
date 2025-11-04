import React from 'react';
import { useFieldContext } from '../../Form/hooks';

export default function TextField({
	label,
	placeholder,
}: {
	label: string;
	placeholder: string;
}) {
	const field = useFieldContext<string>();

	return (
		<label>
			<h2>{label}</h2>

			<input
				type="text"
				value={field.state.value}
				placeholder={placeholder}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
			/>
		</label>
	);
}
