const key = "joseonstorage";

const DEFAULT_LOCAL_STORAGE = {};

export const writeLocalStorage = (item = DEFAULT_LOCAL_STORAGE) => {
  localStorage.setItem(key, JSON.stringify(item));
  return JSON.parse(localStorage.getItem(key));
};

export const getLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {}

  return writeLocalStorage();
};
