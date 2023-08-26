import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./assets/theme/defaultTheme";
import { GlobalStyle } from "./assets/theme/globalStyles";

const root = createRoot(document.getElementById("root"));

function DataProvider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://krashher.ru/react-price-predictor/get_data.php")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!data) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App data={data} />
    </ThemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <DataProvider />
  </React.StrictMode>,
);

reportWebVitals();
