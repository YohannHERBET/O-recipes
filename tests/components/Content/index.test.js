import Content from 'src/components/Content';
import Card from 'src/components/Card';
import { shallow } from 'enzyme';
import recipes from 'src/data';

describe('Le composant Content', () => {
  // on fait un pseudo rendu du composant un peu comme render de ReactDom
  // on récupère notre élement rendu qu'on va pouvoir analyser un peu comme le DOM avec des querySelector
  // sauf qu'on n'a pas querySelector avec enzyme mais on a find
  const wrapper = shallow(<Content text="Coucou" title="Hello" recipes={recipes} />);

  test('doit contenir un titre qui contient le texte passé en props', () => {
    const title = wrapper.find('.content-title');
    expect(title).toHaveLength(1);
    expect(title.text()).toBe('Hello');
  });

  test('doit contenir autant de cartes que de recettes passées en props', () => {
    const cards = wrapper.find(Card);
    expect(cards).toHaveLength(recipes.length);
  });

});
