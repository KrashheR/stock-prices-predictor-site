import Inner from '../../containers/inner/inner';
import Main from '../main/main';

function App({ data }) {
  return (
    <>
      <Inner>
        <Main data={ data }/>
      </Inner>
    </>
  );
}

export default App;
