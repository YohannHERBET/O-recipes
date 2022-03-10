import { useSelector } from 'react-redux';

import { generateTitle } from 'src/selectors/recipes';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={generateTitle(recipes)}
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
