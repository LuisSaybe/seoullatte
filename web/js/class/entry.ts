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
}
