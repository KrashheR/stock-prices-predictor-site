import React from "react";
import { CurrencyData, ModelAccuracy, PredictedPrice, PriceChange, Prices, StyledCard, StyledCardTitle} from "./styled";
import Title, {TitleLevel, TitleSize, TitleColor} from "../title/title";


function Card({
    titleName,
    ticker,
    predictedPrice,
    priceChange,
    modelAccuracy,
    currencySymbol
  }) {
    return (
      <StyledCard $priceChange={priceChange}>
        <StyledCardTitle>
        <Title level={TitleLevel.H3} size={TitleSize.SMALL} color={TitleColor.WHITE}>{ titleName }</Title>
        </StyledCardTitle>
        <CurrencyData>
            <Title level={TitleLevel.H2} size={TitleSize.BIG} color={TitleColor.WHITE}>
              {ticker}
            </Title>
            <Prices>
              <PredictedPrice>
                {predictedPrice}{currencySymbol}
              </PredictedPrice>
              <PriceChange $priceChange={priceChange}>
                {priceChange > 0 ? `+${priceChange}`: priceChange}{currencySymbol}
              </PriceChange>
            </Prices>
        </CurrencyData>
        <ModelAccuracy>
          Точность модели: {modelAccuracy}%
        </ModelAccuracy>
      </StyledCard>
    );
  }

  export default Card;