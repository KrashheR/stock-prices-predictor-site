import CardList from "../cardList/cardList";
import Table from '../table/table';
import React from "react";

function Main({ data }) {
  return (
    <>
      <CardList data={data}/>
      <Table data={data} />
    </>
  );
}

export default Main;
