import React from "react";
import { StyledCardList } from "./styled";
import Card from '../card/card';

function CardList({ data }) {
  const highestPriceChange = data.reduce((max, curr) => parseFloat(curr.priceChange) > parseFloat(max.priceChange) ? curr : max, data[0]);
  const lowestPriceChange = data.reduce((min, curr) => parseFloat(curr.priceChange) < parseFloat(min.priceChange) ? curr : min, data[0]);
  const highestAccuracy = data.reduce((max, curr) => parseFloat(curr.modelAccuracy) > parseFloat(max.modelAccuracy) ? curr : max, data[0]);

  return (
    <StyledCardList>
        <Card titleName={"Наибольший рост"} ticker={highestPriceChange.ticker} predictedPrice={highestPriceChange.predictedPrice} priceChange={highestPriceChange.priceChange} modelAccuracy={highestPriceChange.modelAccuracy} currencySymbol={highestPriceChange.currencySymbol}/>
        <Card titleName={"Наибольшее падение"} ticker={lowestPriceChange.ticker} predictedPrice={lowestPriceChange.predictedPrice} priceChange={lowestPriceChange.priceChange} modelAccuracy={lowestPriceChange.modelAccuracy} currencySymbol={lowestPriceChange.currencySymbol}/>
        <Card titleName={"Наилучшая точность"} ticker={highestAccuracy.ticker} predictedPrice={highestAccuracy.predictedPrice} priceChange={highestAccuracy.priceChange} modelAccuracy={highestAccuracy.modelAccuracy} currencySymbol={highestAccuracy.currencySymbol}/>
    </StyledCardList>
  );
}

export default CardList;
