/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * on trouve la recette voulue dans la liste des recettes
 * @param {Array} recipes - toutes les recettes
 * @param {string} searchedSlug - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findRecipe(recipes, searchedSlug) {
  const recipe = recipes.find((testedRecipe) => {
    return testedRecipe.slug === searchedSlug;
  });
  return recipe;
}

export function generateTitle(recipes = []) {
  let sentence = 'Découvrez prochainement nos recettes.';
  if (recipes.length === 1) {
    sentence = 'Savourez notre délicieuse recette.';
  }
  else if (recipes.length > 1) {
    sentence = 'Profitez de nos recettes qui déchirent.';
  }
  return sentence;
}
