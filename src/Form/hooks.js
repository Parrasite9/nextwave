import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

// We also support Valibot, ArkType, and any other standard schema library
import { z } from 'zod';
import SelectField from '../Components/Tanstack/SelectField.tsx';
import ErrorMessage from './ErrorMessage';
import TextField from '../Components/Tanstack/TextField.tsx';
import NumberField from '../Components/Tanstack/NumberField.tsx';
import SubmitButton from '../Components/Tanstack/SubmitButton.tsx';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
	createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		NumberField,
		SelectField,
	},
	formComponents: {
		SubmitButton,
		ErrorMessage,
	},
	fieldContext,
	formContext,
});
