import React from 'react';
import ReactDOM from 'react-dom/client';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
// Form components that pre-bind events from the form hook; check our "Form Composition" guide for more
import { TextField, NumberField, SubmitButton } from '~our-app/ui-library';
// We also support Valibot, ArkType, and any other standard schema library
import { z } from 'zod';
import SelectField from '../Components/Tanstack/SelectField';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
	createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		NumberField,
		SelectField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
});
