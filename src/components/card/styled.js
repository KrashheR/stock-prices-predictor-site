import styled from "styled-components";

const Paragraph = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 180px;
    padding: 16px;
    border-radius: 20px;
    justify-content: space-between;
    text-align: center;
    background-color: ${ props => props.theme.colors.bg };
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    @media (max-width: ${ props => props.theme.deviceSizes.laptop }) {
        width: 28vw;
        padding: 10px;
        min-width: 220px;
    }

    @media (max-width: ${ props => props.theme.deviceSizes.tablet }) {
        width: 50vw;
        min-width: 287px;
        padding: 20px;
    }
`;

export const CurrencyData = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
`;

export const Prices = styled.span`
    display: flex;
    flex-direction: column;
`;

export const PredictedPrice = styled(Paragraph)`
    color: ${ props => props.theme.colors.text };
    font-size: ${ props => props.theme.fontSizes.medium };

    @media (max-width: ${ props => props.theme.deviceSizes.laptop }) {
        font-size: ${ props => props.theme.fontSizes.laptopMedium };
    }
`;

export const PriceChangeContainer = styled.span`
    display: inline-block;
`;

export const PriceChange = styled(Paragraph)`
    margin-top: 8px;
    padding: 3px 0;
    border-radius: 15px;

    color: ${ (props) => {
        let color = props.theme.colors.text;
        if (props.$priceChange < 0) {
            color = props.theme.colors.priceDown;
        } else if (props.$priceChange > 0) {
            color = props.theme.colors.priceUp;
        }
        return color;
    } };
    font-size: ${ props => props.theme.fontSizes.small };
`;

export const ModelAccuracy = styled(Paragraph)`
    color: ${props => props.theme.colors.textGray};
    font-size: ${props => props.theme.fontSizes.small};
`;

