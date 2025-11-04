import React from 'react';
import { useFormContext } from '../../Form/hooks';

export default function SubmitButton() {
	const form = useFormContext();

	return (
		<form.Subscribe selector={(s) => s.isSubmitting}>
			{(isSubmitting) => (
				<button
					className="bg-blue-300 w-1/5"
					type="submit"
					disabled={isSubmitting}
				>
					Submit
				</button>
			)}
		</form.Subscribe>
	);
}
