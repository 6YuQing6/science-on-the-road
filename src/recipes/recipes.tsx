import recipesJson from "./recipes.json";

export function getRecipes() {
  return recipesJson.map((recipe) => ({
    title: recipe.title,
    author: recipe.author,
    image: recipe.image ?? "./images/placeholder.png",
    link: recipe.link,
  }));
}

import articlesJson from "./articles.json";
export function getArticles() {
  return articlesJson.map((recipe) => ({
    title: recipe.title,
    author: recipe.author,
    image: recipe.image ?? "./images/placeholder.png",
    link: recipe.link,
  }));
}

import ingredients from "./ingredients.json";
export function getIngredients(): Record<
  string,
  {
    description: string[];
    summarized_description: string;
  }
> {
  return ingredients;
}
