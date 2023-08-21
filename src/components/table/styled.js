import styled from "styled-components";

export const StyledTable = styled.div`
  display: grid;
  margin: 0 45px;

  @media (max-width: ${ props => props.theme.deviceSizes.mobile }) {
    margin: 0 20px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;

  @media (max-width: ${ props => props.theme.deviceSizes.tablet }) {
    padding: 30px 0;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 20px;
  }
`;

export const TableTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.Big};
  color: ${props => props.theme.colors.text};

  @media (max-width: ${ props => props.theme.deviceSizes.laptop }) {
    font-size: ${props => props.theme.fontSizes.titleLaptop};
  }

  @media (max-width: ${ props => props.theme.deviceSizes.mobile }) {
    font-size: ${props => props.theme.fontSizes.titleMobile};
  }
`;