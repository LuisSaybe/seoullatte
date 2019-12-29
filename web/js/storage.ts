import Ajv from "ajv";

const key = "joseonstorage";

const ajv = new Ajv();
const validateUserSchema = ajv.compile({
  type: "object",
  properties: {
    token: {
      type: "string",
    },
  },
});
const DEFAULT_LOCAL_STORAGE = {
  token: null,
};

export const writeLocalStorage = (item = DEFAULT_LOCAL_STORAGE) => {
  localStorage.setItem(key, JSON.stringify(item));
  return JSON.parse(localStorage.getItem(key));
};

export const getLocalStorage = () => {
  let item;

  try {
    item = JSON.parse(localStorage.getItem(key));
  } catch (e) {
    item = null;
  }

  return item === null || !validateUserSchema(item)
    ? writeLocalStorage()
    : item;
};
