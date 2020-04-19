export interface Topic {
  description: string;
  name: string;
  path: string;
  searchTerms: string;
  component: React.ComponentType;
}

export interface KoreanDefinitionIdentifier {
  q: string;
}

export interface DefinitionDisplayOptions {
  senseIndexes?: number[];
}
