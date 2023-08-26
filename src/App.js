import Inner from "./components/containers/inner/inner";
import Main from "./components/layouts/main/main";

function App({ data }) {
  return (
    <>
      <Inner>
        <Main data={data} />
      </Inner>
    </>
  );
}

export default App;
