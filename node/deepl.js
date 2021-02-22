function extract() {
  const input = document.querySelector(
    "textarea[dl-test=translator-source-input]",
  ).value;
  const translated = document.querySelector(
    "textarea[dl-test=translator-target-input]",
  ).value;
  const inputParts = input.split(new RegExp("\n"));
  const outputParts = translated.split(new RegExp("\n"));
  const result = {};

  for (let i = 0; i < Math.min(inputParts.length, outputParts.length); i++) {
    result[inputParts[i]] = outputParts[i];
  }

  return result;
}

JSON.stringify(extract(), null, 2);
