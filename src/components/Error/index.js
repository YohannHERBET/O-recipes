import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Error = ({ text }) => (
  <Page>
    <AppHeader />
    <Content
      title="Erreur"
      text={text}
    />
  </Page>
);

Error.propTypes = {
  text: PropTypes.string,
};

Error.defaultProps = {
  text: 'Nous sommes désolé, Une erreur s\'est produite.'
};

export default Error;
