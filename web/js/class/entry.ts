import { LanguageNames } from "../interface/korean";

export class Entry {
  private xml: Document;

  constructor(document: string) {
    this.xml = new DOMParser().parseFromString(document, "application/xml");
  }

  public getDictionaryForm() {
    return this.xml.querySelector(":root > item > word_info > word").innerHTML;
  }

  public getSenses() {
    return this.xml.querySelectorAll(":root > item > word_info > sense_info");
  }

  public getSense(index: number) {
    return this.xml.querySelector(
      `:root > item > word_info > sense_info:nth-of-type(${index})`,
    );
  }

  public getTargetCode() {
    return this.xml.querySelector(`:root target_code`).textContent;
  }

  public getSenseTranslation(index: number, language: LanguageNames) {
    const sense = this.xml.querySelector(
      `:root > item > word_info > sense_info:nth-of-type(${index})`,
    );

    for (const translation of sense.querySelectorAll("translation") as any) {
      if (translation.querySelector("trans_lang").textContent === language) {
        return translation.querySelector("trans_dfn").textContent;
      }
    }

    return null;
  }

  public getPartOfSpeech() {
    return this.xml.querySelector(`:root > item > word_info > pos`).textContent;
  }
}
