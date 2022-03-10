// ceci n'est pas un test
// c'est une fonction bidon que je vais test
function sum(a, b) {
  return a + b;
}

// les vrais tests commencent ici
// describe est une fonction fournie par jest qui permet de délimiter un ensemble de tests
// on lui donne une string pour nommer le chapitre, c'est pour nous, pour nous y retrouver
// et une fonction qui regroupe des tests
describe('La fonction sum', () => {

  test('doit etre une fonction', () => {
    const type = typeof sum;
    expect(type).toBe('function');
  });

  // la fonction test représente un test, on lui passe une string pour nommer le test
  // et une fonction qui contient l'assertion
  test('doit donner 8 pour 5 et 3', () => {
    const result = sum(3, 5);
    // on passe à expect la valeur à tester
    // on peut ensuite chainer avec des méthodes propres à jest pour faire des comparaisons
    expect(result).toBe(8);
    // si c'est vrai on aura un message vert, sinon un message rouge indiquant ce qu'on a vraiment
  });

});
