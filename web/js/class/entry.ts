import { LanguageNames, WordGrade } from "web/js/interface/korean";
import { Sense } from "web/js/class/sense";

export class Entry {
  public xml: Document;

  constructor(document: string) {
    this.xml = new DOMParser().parseFromString(document, "application/xml");
  }

  public getDictionaryForm() {
    return this.xml.querySelector(":root > item > word_info > word").innerHTML;
  }

  public getSenses() {
    const senses: Sense[] = [];

    for (const root of this.xml.querySelectorAll(
      ":root > item > word_info > sense_info",
    )) {
      senses.push(new Sense(root));
    }

    return senses;
  }

  public hasDisplayableWordGrade() {
    const grades = this.getWordGrades();
    return grades.some((grade) => grade !== WordGrade.none);
  }

  public getLowestWordGrade() {
    let lowestGrade;

    for (const grade of this.getWordGrades()) {
      if (grade === WordGrade.beginner) {
        return WordGrade.beginner;
      }

      if (
        grade === WordGrade.intermediate &&
        (lowestGrade === WordGrade.advanced || !lowestGrade)
      ) {
        lowestGrade = WordGrade.intermediate;
      }

      if (grade === WordGrade.advanced && !lowestGrade) {
        lowestGrade = WordGrade.advanced;
      }
    }

    return lowestGrade;
  }

  public getWordGrades() {
    return Array.from(this.xml.querySelectorAll(":root word_grade")).map(
      (element) => element.textContent,
    );
  }

  public getSense(index: number) {
    const element = this.xml.querySelector(
      `:root > item > word_info > sense_info:nth-of-type(${index})`,
    );
    return element && new Sense(element);
  }

  public getPronunciation() {
    return this.xml.querySelector(":root pronunciation").textContent;
  }

  public getTargetCode() {
    return this.xml.querySelector(`:root target_code`).textContent;
  }

  public hasConjugations() {
    return (
      Array.from(this.xml.querySelectorAll(":root conju_info")).map(
        (element) => element.textContent,
      ).length > 0
    );
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
