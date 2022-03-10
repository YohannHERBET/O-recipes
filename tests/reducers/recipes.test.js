// je récupère le truc à tester
import reducer, { initialState } from 'src/reducers/recipes';
import { saveRecipes } from 'src/actions/recipes';

// à quoi ça sert à reducer ?
// - à donner le state initial si on l'appelle sans argument
// - à déterminer un nouveau state en fonction du state actuel et d'une action
// Qu'est-ce qu'on va tester ? ça, ce qui est au dessus, cad on test que la fonction fait ce pour quoi elle est prévue

describe('Le reducer recipes', () => {

  test('doit etre une fonction', () => {
    const type = typeof reducer;
    expect(type).toBe('function');
  });

  test('doit retourner le state initial des recettes sans argument', () => {
    const result = reducer();
    expect(result).toBe(initialState);
  });

  describe('pour l\'action SAVE_RECIPES', () => {

    test('doit retourner un nouveau state contenant les recettes de l\'action', () => {
      const currentState = { list: [] };
      const action = saveRecipes([1,2,3]);
      const newState = {
        list: [1,2,3],
        loading: false,
      };
      
      const result = reducer(currentState, action);
      // toEqual permet de vérifier que 2 objects contiennent les memes propriétés
      // https://jestjs.io/fr/docs/expect#toequalvalue
      expect(result).toEqual(newState);
    });

    test('doit retourner un nouveau state qui contient ce qu\'il contenait déjà en plus des recettes', () => {
      const currentState = { 
        list: [],
        favorites: [1,2,3],
      };
      const action = saveRecipes([1,2,3]);
      const newState = {
        list: [1,2,3],
        favorites: [1,2,3],
        loading: false,
      };
      
      const result = reducer(currentState, action);
      expect(result).toEqual(newState);
    });

  });

});
