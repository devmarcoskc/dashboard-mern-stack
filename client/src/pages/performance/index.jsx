import React from 'react'
import { Box, useTheme } from '@mui/material'
import {useGetPerformanceQuery} from "../../state/api.js";
import { DataGrid } from '@mui/x-data-grid';
import Header from "../../components/Header.jsx";
import { useSelector } from 'react-redux';

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId)
  const {data, isLoading} = useGetPerformanceQuery(userId);
  
  const columns = [
    {
        field: "_id",
        headerName: "ID",
        flex: 1,
    },
    {
        field: "userId",
        headerName: "userId",
        flex: 0.5,
    },
    {
        field: "createdAt",
        headerName: "createdAt",
        flex: 1,
    },
    {
        field: "products",
        headerName: "# of Products",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length,
    },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ]

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Performance" subtitle="Track your Afilliate Sales Performance here"/>
        <Box
            mt="40px"
            height="80vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: theme.palette.primary.light,
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderTop: "none"
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${theme.palette.secondary[200]} !important`
                }
            }}
        >
            <DataGrid
                rows={(data && data.sales) || []}
                getRowId={(row) => row._id}
                loading={isLoading || !data}
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Performance;