import React, { useState } from "react";
import DataTable from "../../dataDisplay/dataTable/dataTable";
import Search from "../../ui/search/search";
import { StyledTable, TableHeader, TableTitle } from "./styled";


function TableContainer ({ data }) {
    const [searchTerm, setSearchTerm] = useState('');

    return(
        <StyledTable>
            <TableHeader>
                <TableTitle>
                    Спрогнозированные цены активов
                </TableTitle>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </TableHeader>
            <DataTable data={data} searchTerm={searchTerm}/>
        </StyledTable>

    );
}

export default TableContainer;
