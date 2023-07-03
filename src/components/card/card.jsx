import React from "react";
import { CurrencyData, ModelAccuracy, PredictedPrice, PriceChange, Prices, StyledCard} from "./styled";
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
        <Title level={TitleLevel.H3} size={TitleSize.SMALL} color={TitleColor.GRAY}>
          {titleName}
        </Title>
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