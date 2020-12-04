export const wordsTypeDef = `
  type Words {
    name: String
    category: String
    image: String
    linkW: String
    meaning: String
  }
  input WordsInput {
    name: String
    category: String
    image: String
    linkW: String
    meaning: String
  }`;

export const wordsQueries = `
      allWords: [Words]
      wordsByName(body: WordsInput): Words
      wordsByCategory(body: WordsInput): Words
  `;

export const wordsMutations = `
    createWord(body: WordsInput): Words
    updateWord(body: WordsInput): Words
    deleteWord(body: WordsInput): Words
`;
