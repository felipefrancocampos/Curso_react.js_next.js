import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  // eslint-disable-next-line prettier/prettier
  const headingContainer = screen.getByRole('heading', { name: 'Hello' })
    // eslint-disable-next-line prettier/prettier
    .parentElement;
  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
