import { GlobalStyle } from "./styles";
import Inner from '../inner/inner';
import CardList from "../cardList/cardList";
import Table from '../table/table';

function App({ data }) {
  return (
    <>
      <GlobalStyle />
      <Inner>
        <CardList data={data}/>
        <Table data={data} />
      </Inner>
    </>
  );
}

export default App;
