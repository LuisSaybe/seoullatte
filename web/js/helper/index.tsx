import Ajv from "ajv";

export function isValidEmail(email) {
  return new Ajv().compile({
    type: "string",
    format: "email",
  })(email);
}
