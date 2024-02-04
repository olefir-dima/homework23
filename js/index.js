class Recipe {
  constructor(name, ingredientList, description, time) {
    this.name = name;
    this.ingredientList = ingredientList;
    this.description = description;
    this.time = time;
  }

  isValidRecipe() {
    //validations (each line for one parameter)
    return (
      typeof this.name === "string" &&
      this.name?.trim() &&
      Array.isArray(this.ingredientList) &&
      this.ingredientList.length > 0 &&
      typeof this.description === "string" &&
      this.description?.trim() &&
      typeof this.time === "number" &&
      this.time > 0
    );
  }
}

class RecipeBook {
  #recipeArr = [];

  addRecipe(recipe) {
    recipe.isValidRecipe()
      ? this.#recipeArr.push(recipe)
      : console.log("Recipe is not valid");
  }

  findRecipeByTime(maxTime) {
    const matchingRecipes = this.#recipeArr.filter(
      (recipe) => recipe.time <= maxTime
    );
    return matchingRecipes;
  }

  findRecipeByIngredients(ingredientsToFind) {
    const matchingRecipes = this.#recipeArr.filter((recipe) =>
      ingredientsToFind.every((ingredient) =>
        recipe.ingredientList.includes(ingredient)
      )
    );
    return matchingRecipes;
  }
}

const recipeBook = new RecipeBook();

const pizza = new Recipe(
  "Pizza Margherita",
  ["dough", "tomato sauce", "mozzarella", "basil"],
  "Roll out the dough, spread tomato sauce, add mozzarella and basil, bake in the oven.",
  60
);
recipeBook.addRecipe(pizza);

const pasta = new Recipe(
  "Spaghetti Bolognese",
  ["spaghetti", "beef", "tomato sauce", "onion", "garlic"],
  "Cook spaghetti, brown ground beef with onion and garlic, mix with tomato sauce.",
  30
);
recipeBook.addRecipe(pasta);

const greekSaladInv = new Recipe(
  "Greek Salad",
  ["cucumber", "tomato", "feta cheese", "olives", "red onion"],
  "Combine cucumber, tomato, feta cheese, olives, and red onion, drizzle with olive oil."
  //wo time
);
recipeBook.addRecipe(greekSaladInv);

const beefStew = new Recipe(
  "Slow-Cooked Beef Stew",
  [
    "beef",
    "potatoes",
    "carrots",
    "onion",
    "garlic",
    "beef broth",
    "red wine",
    "rosemary",
    "thyme",
  ],
  "Brown beef, sauté onions and garlic, add vegetables, beef broth, and red wine. Simmer with herbs for 2 hours.",
  120
);
recipeBook.addRecipe(beefStew);

const recipesByTime = recipeBook.findRecipeByTime(60);
console.log(
  "Recipes with cooking time <= 60 minutes:",
  recipesByTime.map((recipe) => recipe.name).join(", ")
);

const recipesByIngredients = recipeBook.findRecipeByIngredients([
  "beef",
  "onion",
  "garlic",
]);
console.log(
  "Recipes with potato and carrot:",
  recipesByIngredients.map((recipe) => recipe.name).join(", ")
);
