/**
 * Replaces placeholders in a template string with corresponding values from a variables object.
 *
 * Placeholders are denoted by double curly braces, e.g. `{{key}}`.
 * If a key is not found in the variables object, it is replaced with an empty string.
 *
 * @param template - The template string containing placeholders.
 * @param variables - An object mapping keys to values to interpolate into the template.
 * @returns The interpolated string with all placeholders replaced by their corresponding values.
 */
export function interpolate(template: string, variables: Record<string, string | number | boolean>): string {
	return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
		return key in variables ? String(variables[key]) : "";
	});
}
