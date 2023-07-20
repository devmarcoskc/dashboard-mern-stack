import React,{useState} from 'react';
import { Box, 
Card, CardActions, CardContent,
Collapse, Button, Typography,
Rating, useTheme, useMediaQuery 
} from '@mui/material';
import { useGetProductsQuery } from '../../state/api';
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem';

const Products = () => {
  const {data} = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Products"
        subtitle="See your list of products"
      />
      {data !== undefined ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
          }}
        >
          {data.map(({_id, name, description, price, rating, category, supply, stat}) => (
            <ProductItem
              key={_id}
              _id={_id}
              name={name}
              description={description}
              price={price}
              rating={rating}
              category={category}
              supply={supply}
              stat={stat}
            />
          ))}
        </Box>
      ): (
        <>
          Loading...
        </>
      )}
    </Box>
  )
}

export default Products