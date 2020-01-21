export class Definition {
  private xml: Document;
  private document: string;

  constructor(document: string) {
    this.document = document;
  }

  public getDictionaryForm() {
    this.parse();
    return this.xml.querySelector(":root > item > word_info > word").innerHTML;
  }

  public getSenses() {
    this.parse();
    return this.xml.querySelectorAll(":root > item > word_info > sense_info");
  }

  private parse() {
    if (!this.xml) {
      this.xml = new DOMParser().parseFromString(
        this.document,
        "application/xml",
      );
    }
  }
}
