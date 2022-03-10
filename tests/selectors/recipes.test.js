// par soucis pratique on peut importer nos recettes bidons
import recipes from 'src/data';
import { findRecipe, generateTitle } from 'src/selectors/recipes';

// On va tester la fontion findRecipe
describe('Selector findRecipe', () => {
  // vérifier que c'est une fonction
  test('doit être une fonction', () => {
    const type = typeof findRecipe;
    expect(type).toBe('function');
  });
  // vérifier que la fonction donne la première recette du tableau si on lui passe la liste des recettes et le slug 'crepes-raffinees'
  test('doit trouver une recette dans la liste en fonction du slug', () => {
    // on prend le slug de la premire recette
    const slug = recipes[0].slug;
    // on donne la liste des recette à findRecipe
    const foundRecipe = findRecipe(recipes, slug);
    // il doit théoriquement nous trouver la première recette
    expect(foundRecipe).toBe(recipes[0]);
  });
  // vérifier que la fonction donne undefined si on passe le slug 'toto-tata'
  test('ne doit trouver aucune recette si le slug recherché n\'est pas dans la liste', () => {
    const slug = 'toto-tata';
    const foundRecipe = findRecipe(recipes, slug);
    expect(foundRecipe).toBeUndefined();
  });
});

describe('Selector generateTitle', () => {
  test('doit être une fonction', () => {
    const type = typeof generateTitle;
    expect(type).toBe('function');
  });

  test('doit donner une phrase par défaut', () => {
    const result = generateTitle();
    expect(result).toBe('Découvrez prochainement nos recettes.');
  });

  test('doit donner une phrase différente quand il y a une recette', () => {
    const recipes = [1];
    const result = generateTitle(recipes);
    expect(result).toBe('Savourez notre délicieuse recette.');
  });

  test('doit donner la phrase par défaut pour une liste vide', () => {
    const result = generateTitle([]);
    expect(result).toBe('Découvrez prochainement nos recettes.');
  });

  test('doit donner une phrase différente pour plusieurs recettes', () => {
    const recipes = [1,2,3];
    const result = generateTitle(recipes);
    expect(result).toBe('Profitez de nos recettes qui déchirent.');
  });
});
