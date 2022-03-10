import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/App';
import store from 'src/store';

// BrowserRouter est indispensable quand on veut utiliser React-router-dom
// pour rendre disponible les infos de l'url et de l'historiques aux autres composants
const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
