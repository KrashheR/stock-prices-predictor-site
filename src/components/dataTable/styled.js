import styled from "styled-components";

export const StyledTable = styled.table`
  width: -webkit-fill-available;
  margin-bottom: 40px;
  border-spacing: 0;
  border-collapse: separate;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    display: block;
    border-radius: 0;
    overflow-x: auto;
    white-space: nowrap;
  }
`;

export const StyledTableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    overflow-x: auto;
  }
`;

export const StyledThead = styled.thead`
  color: ${props => props.theme.colors.textGray};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeaderTh = styled.th`
  position: relative;
  padding: 20px;
  background-color: ${props => props.theme.colors.bg};
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => (props.name === props.sortfield ? props.theme.colors.selected : props.theme.colors.text)};
  user-select: none;

  &::after {
    content: '${props => (props.name === props.sortfield ? (props.sortdirection === 'asc' ? '↑' : '↓') : ' ')}';
    position: absolute;
    right: 5px;
  }

  @media (max-width: ${props => props.theme.deviceSizes.laptop}) {
    font-size: ${props => props.theme.fontSizes.laptopSmall};
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    white-space: break-spaces;

    &:first-child {
      position: sticky;
      left: 0;
      z-index: 1;
      background-color: ${props => props.theme.colors.bg};
    }
  }
`;

export const StyledTr = styled.tr`
  line-height: 2.5;
`;

export const StyledTd = styled.td`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primary};

  @media (max-width: ${props => props.theme.deviceSizes.laptop}) {
      font-size: ${props => props.theme.fontSizes.laptopSmall};
  }

  @media (max-width: ${props => props.theme.deviceSizes.tablet}) {
    white-space: break-spaces;

    &:first-child {
      position: sticky;
      left: 0;
      z-index: 1;
    }
  }

  @media (max-width: ${props => props.theme.deviceSizes.mobile}) {
    font-size: ${props => props.theme.fontSizes.mobileSmall};
  }
`;
