import styled from "styled-components";

export const StyledCardList = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 30px;

  @media (max-width: ${(props) => props.theme.deviceSizes.laptop}) {
    margin: 0 20px;
  }

  @media (max-width: ${(props) => props.theme.deviceSizes.tablet}) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
