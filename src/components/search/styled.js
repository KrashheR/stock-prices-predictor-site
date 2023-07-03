import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 20px;
  padding-left: 10px;
  outline: 0;
  font-size: ${props => props.theme.fontSizes.small};

  @media (max-width: ${ props => props.theme.deviceSizes.laptop }) {
    width: 200px;
    height: 35px;
  }
`;