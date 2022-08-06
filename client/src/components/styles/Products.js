import styled from 'styled-components'

export const ProductsFlex = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-auto-rows: 1fr;
    place-items:center;
    gap: 4rem;
    
`

export const ProductStyles = styled.div`
  
    .product_container{
        align-items: center;
        display: flex;
        flex-direction:column;
        gap: 2rem;
        overflow: hidden;
    }

    .product_img_container{
        display: block;
        height: 30rem;
        width: 100%;
    }

    
`
