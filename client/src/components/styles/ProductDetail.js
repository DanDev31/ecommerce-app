import styled from 'styled-components'

export const ProductDetailStyle = styled.div`
    align-items: center;
    display: flex;
    gap: 5rem;
    margin-bottom: 5rem;

    .product_detail_img{
        max-width: 50rem;
    }
    .product_detail_info{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        max-width: 35rem;
    }

    @media (max-width:800px){
        &{
            align-items: stretch;
            flex-direction: column;
            gap: 2rem;
        }
    }
`

export const RelatedProducts = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 3rem;

`