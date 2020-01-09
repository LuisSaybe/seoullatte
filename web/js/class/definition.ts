export class Definition {
  private xml;

  constructor(xml) {
    this.xml = xml;
  }

  public getDictionaryForm() {
    return this.xml.querySelector(":root > item > word_info > word").innerHTML;
  }

  public getSenses() {
    return this.xml.querySelectorAll(":root > item > word_info > sense_info");
  }
}
