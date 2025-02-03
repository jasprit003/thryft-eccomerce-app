import { createGlobalStyle } from 'styled-components';

const GLobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Dm Sans', serif;
  font-weight: 400;

},
body {
  background-color: #FFFFFF;
  color: hsl(0, 0%, 0%)
}
`;
export default GLobalStyles;
