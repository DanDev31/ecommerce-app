import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    gap: 2rem;

    div{
        padding: 1rem 2rem;
    }
    .products_container{
        flex: 3;
    }

    .summary_container{
        background-color: lightgray;
        display: flex;
        flex-direction: column;
        height: 50%;
        position: sticky;
        top: 0;
        right: 0;
        flex: 1;


        div{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            flex-grow: 1;
        }
    }
`

export const CartTable = styled.table`
    border-collapse: collapse;
    width: 100%;

     th, td{
        padding: 2rem 1rem;
        text-align: center;

    .cart_item_details{
        align-items: center;
        display: flex;
        gap: 1rem;

        & div{
            width: 20rem;
        }
    }

    .quantity_buttons{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:.8rem;

        button{
            border: none;
            color: white;
            background-color: #121e35;
            font-size: 1.2rem;
            font-weight: 700;
            height: 2.5rem;
            width: 2.5rem;

        }
    }
    
}
`