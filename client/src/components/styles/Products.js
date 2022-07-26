import styled from 'styled-components'

export const ProductsFlex = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-auto-rows: 1fr;
    place-items:center;
    gap: 4rem;
    
`


export const ProductStyles = styled.div`
    height: 90%;

    .image_container{
        width: 30rem;
        height: 100%;
    }
`
