import styled from 'styled-components'

export const CartContainer = styled.div`
    display: flex;
    gap: 3rem;

    & > div{
        padding: 2rem;
    }

    .products_container{
        flex: 3;
    }

    .summary_container{
        background-color: #e7e7e7;
        display: flex;
        flex-direction: column;
        height: 50%;
        position: sticky;
        top: 0;
        right: 0;
        flex: 1;


        .summary_inner_box{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            justify-content: center;
            flex-grow: 1;
            padding-top: 1rem;

            & > div{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }


    }
`

export const CartTable = styled.table`
    border-collapse: collapse;
    width: 100%;


     th, td{
        padding: 1.5rem 1rem;
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
            cursor: pointer;
            background-color: #121e35;
            font-size: 1.2rem;
            font-weight: 700;
            height: 2.5rem;
            width: 2.5rem;

        }
    }

    .product_delete_button{
        cursor: pointer;
        font-size: 2rem;

        &:hover{
            color: red;
        }
    }

    
}
`