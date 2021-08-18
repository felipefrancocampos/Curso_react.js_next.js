import { Heading } from '.';
import { renderTheme } from "../../styles/render-theme"

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading />);
  })
})
