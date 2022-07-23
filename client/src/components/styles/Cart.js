import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    gap: 2rem;
    
    .products_container{
        flex: 3;
    }

    .summary_container{
        background-color: lightgray;
        padding: 0 3rem;
        flex: 1;


        div{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            /* flex-grow: 1; */
        }
    }
`