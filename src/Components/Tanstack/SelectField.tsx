import React from 'react';
import { useFieldContext } from '../../Form/hooks';

export default function SelectField({
	label,
	options,
}: {
	label: string;
	options: string[];
}) {
	const field = useFieldContext<string>();

	return (
		<label>
			<h2>{label}</h2>

			<select
				value={field.state.value}
				onChange={(e) => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
			>
				{options.map((option) => (
					<option value={option}>{option}</option>
				))}
			</select>
		</label>
	);
}
