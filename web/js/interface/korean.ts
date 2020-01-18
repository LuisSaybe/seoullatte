export type IDefinitionContextType = [{ [id: string]: IDefinition }];

export interface ITopic {
  description: string;
  name: string;
  path: string;
  searchTerms: string;
  component: React.ComponentType;
}

export interface IKoreanDefinitionIdentifier {
  q: string;
}

export interface IDefinitionDisplayOptions {
  senseIndexes?: number[];
}

export interface IDefinition {
  getDefinition(): string;
}
