import { GlobalStyle } from "../../theme/globalStyles";
import Inner from '../inner/inner';
import Main from "../main/main";

function App({ data }) {
  return (
    <>
      <GlobalStyle />
      <Inner>
        <Main data={ data }/>
      </Inner>
    </>
  );
}

export default App;
