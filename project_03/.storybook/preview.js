import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
];
 5  src/components/Heading/index.jsx
@@ -1,10 +1,11 @@
import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
export const Heading = ({ children, light = false }) => {
  return <Styled.Title light={light}>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
