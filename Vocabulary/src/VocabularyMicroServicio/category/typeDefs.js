export const categoryTypeDef = `
  type Category {
     name: String
     level: String
  }
  input CategoryInput {
     name: String
     level: String
  }`;

export const categoryQueries = `
      allCategories: [Category]
      categoryByName(body: CategoryInput): Category
      categoryByLevel(body: CategoryInput): Category
  `;

export const categoryMutations = `
    createCategory(body: CategoryInput): Category
    updateCategory(body: CategoryInput): Category
    deleteCategory(body: CategoryInput): Category
`;
