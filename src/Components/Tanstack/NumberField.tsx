import React from 'react';
import { useFieldContext } from '../../Form/hooks';

export default function NumberField({
	label,
	placeholder,
}: {
	label: string;
	placeholder: string;
}) {
	const field = useFieldContext<number>();

	return (
		<label>
			<h2>{label}</h2>

			<input
				type="number"
				placeholder={placeholder}
				value={field.state.value}
				onChange={(e) => field.handleChange(Number(e.target.value))}
				onBlur={field.handleBlur}
			/>
		</label>
	);
}
