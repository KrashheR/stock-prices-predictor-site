import CardContainer from "../../containers/cardContainer/cardContainer";
import TableContainer from "../../containers/tableContainer/table";
import React from "react";

function Main({ data }) {
  return (
    <>
      <CardContainer data={data} />
      <TableContainer data={data} />
    </>
  );
}

export default Main;
