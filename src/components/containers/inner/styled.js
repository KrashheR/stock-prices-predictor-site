import styled from "styled-components";

export const StyledInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.colors.bgGradient};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.8);
`;
