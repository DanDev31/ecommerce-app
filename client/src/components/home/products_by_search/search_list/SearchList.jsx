import React from "react";
import { useSelector } from "react-redux";
import { SearchProductCard } from "../search_list_card/SearchProductCard";

export const SearchList = () => {
  const { searchedProducts } = useSelector((state) => state.searchBar);

  return (
    <section>
      <div className="">
        <h5>Total results: {searchedProducts.length}</h5>
        <div className="">
          {searchedProducts.length > 0 ? (
            searchedProducts.map((product, i) => (
              <SearchProductCard key={i} {...product} />
            ))
          ) : (
            <p>There's no results</p>
          )}
        </div>
      </div>
    </section>
  );
};
