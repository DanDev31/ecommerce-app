import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../styles/Container";
import { ProductsFlex } from "../../../styles/Products";
import { SearchProductCard } from "../search_list_card/SearchProductCard";


export const SearchList = () => {
  const { searchedProducts } = useSelector((state) => state.searchBar);
  const searchedStorageValue = sessionStorage.getItem('searchValue')

  return (
    <Container>
        <h2>Results for: {searchedStorageValue}</h2>
        <p style={{marginTop:"2rem"}}>Total results: {searchedProducts ? searchedProducts.length : 0}</p>
        <ProductsFlex>
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product, i) => (
              <SearchProductCard key={i} {...product} />
            ))
          ) : (
            <p style={{marginTop:"6rem"}}>There's no results</p>
          )}
        </ProductsFlex>
      
    </Container>
  );
};
