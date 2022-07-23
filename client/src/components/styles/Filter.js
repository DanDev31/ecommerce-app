import styled from 'styled-components'

export const FilterBar = styled.div`

    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;

    .filter_menu_item{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 100;

        div:first-child{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .filter_dropdown_menu{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 0;
            overflow: hidden;
        }

    .active{
        height: 100%;
    }

    .rotate{
        transform: rotate(90deg);
    }
`