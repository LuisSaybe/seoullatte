import Ajv from 'ajv';
import settings from 'web/settings';

const validateEmailSchema = new Ajv().compile({
  type: 'string',
  format: 'email'
});

export function isValidEmail(email) {
  return validateEmailSchema(email);
}

export function svgUrl(name) {
  return `https://${settings.digitalocean.spaces.imageBucket}.cdn.digitaloceanspaces.com/streamline/svg/${name}`;
}

export function safe(run, defaultValue) {
  try {
    const result = run();
    return typeof result === 'undefined' ? defaultValue : result;
  } catch {
    return defaultValue;
  }
}
