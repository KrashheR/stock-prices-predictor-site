import React, { useState } from "react";
import { StyledThead, StyledTable, StyledTableWrapper, StyledHeaderTh, StyledTd, StyledTr } from "./styled";
import { defaultTheme } from "../../theme/defaultTheme";

function DataTable({ data, searchTerm }) {
  const [sortField, setSortField] = useState('currency');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = [...data].filter(item => item.currency.toLowerCase().includes(searchTerm.toLowerCase()));

  const sortedData = filteredData.sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    const isNumeric = !isNaN(parseFloat(valueA)) && isFinite(valueA);

    if (isNumeric) {
      valueA = parseFloat(valueA);
      valueB = parseFloat(valueB);
    }

    if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;

    return 0;
  });

  return (
    <StyledTableWrapper>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledHeaderTh $sortfield={sortField} $sortdirection={sortDirection} name ='currency' onClick={() => handleSort('currency')}>Название актива</StyledHeaderTh>
            <StyledHeaderTh $sortfield={sortField} $sortdirection={sortDirection} name ='ticker' onClick={() => handleSort('ticker')}>Тикер</StyledHeaderTh>
            <StyledHeaderTh $sortfield={sortField} $sortdirection={sortDirection} name ='lastPrice' onClick={() => handleSort('lastPrice')}>Текущая стоимость</StyledHeaderTh>
            <StyledHeaderTh $sortfield={sortField} $sortdirection={sortDirection} name ='predictedPrice' onClick={() => handleSort('predictedPrice')}>Прогноз</StyledHeaderTh>
            <StyledHeaderTh $sortfield={sortField} $sortdirection={sortDirection} name ='priceChange' onClick={() => handleSort('priceChange')}>Изменение цены</StyledHeaderTh>
            <StyledHeaderTh $sortfield={sortField} $sortdirection={sortDirection} name ='modelAccuracy' onClick={() => handleSort('modelAccuracy')}>Точность модели</StyledHeaderTh>
          </tr>
        </StyledThead>
        <tbody>
          {sortedData.map((row, i) => (
            <StyledTr key={i}>
              <StyledTd>{row.currency}</StyledTd>
              <StyledTd>{row.ticker}</StyledTd>
              <StyledTd>{row.lastPrice}{row.currencySymbol}</StyledTd>
              <StyledTd>{row.predictedPrice}{row.currencySymbol}</StyledTd>
              <StyledTd style={row.priceChange > 0 ? {color: defaultTheme.colors.priceUp} : {color: defaultTheme.colors.priceDown}}>
                {row.priceChange}{row.currencySymbol}
              </StyledTd>
              <StyledTd>{`${row.modelAccuracy}%`}</StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
}

export default DataTable;
