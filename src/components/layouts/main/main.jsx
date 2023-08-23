import CardList from "../../containers/cardList/cardList";
import TableContainer from "../../containers/tableContainer/table";
import React from "react";

function Main({ data }) {
  return (
    <>
      <CardList data={data} />
      <TableContainer data={data} />
    </>
  );
}

export default Main;
