import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./components/theme/defaultTheme";

const root = createRoot(document.getElementById('root'));

function DataProvider() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://krashher.ru/get_data.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <App data={data} />
    </ThemeProvider>
  );
}

root.render(
  <React.StrictMode>
    <DataProvider />
  </React.StrictMode>
);

reportWebVitals();
