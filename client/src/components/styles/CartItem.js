import styled from 'styled-components'

export const CartProduct = styled.div`
    align-items: center;
    /* border-bottom: 2px solid lightgrey; */
    display: flex;
    gap: 2rem;
    padding: 2rem 0;

    div:nth-child(1){
        width: 20rem;
    }

    .cart_product_second_child{
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 0 1.5rem;
        width: 100%;
    }

`