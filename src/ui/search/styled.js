import styled from "styled-components";

export const StyledInput = styled.input`
  padding-left: 10px;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 20px;
  outline: 2px solid ${props => props.theme.colors.primary};
  font-family: Montserrat;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:focus{
    outline: 2px solid ${props => props.theme.colors.text};
  }

  @media (max-width: ${ props => props.theme.deviceSizes.laptop }) {
    width: 300px;
    height: 45px;
  }

  @media (max-width: ${ props => props.theme.deviceSizes.mobile }) {
    width: 240px;
    height: 45px;
  }
`;