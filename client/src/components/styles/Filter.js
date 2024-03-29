import styled from 'styled-components'

export const FilterBar = styled.div`
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    gap: 2rem;
    position: relative;
    z-index: 100;


    .filter_menu_item{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 3rem;
        z-index: 100;

        .filter_name_item{
            align-items: center;
            display: flex;
            justify-content: space-between;
            gap: 2rem;
        }

        div:first-child{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .filter_menu_item_arrow{
            cursor: pointer;
            font-size: 1.6rem;
        }
    }

    .filter_dropdown_menu{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 0;
            overflow: hidden;
        }

    .arrow_filter_container{
        position: relative;

    }
    
    .close_filter_menu_icon{
        font-size: 2.5rem;
        background-color: #ffffff;
        border-radius: 0 20px 20px 0;
        display: none;
        position: absolute;
        left: 1.5rem;
        overflow: hidden;
        z-index: -1;
    }

    .active{
        height: 100%;
    }

    .rotate{
        transform: rotate(90deg);
    }
    .rotate_180{
        transform: rotate(180deg);
        border-radius: 20px 0 0 20px;
    }

    @media (max-width:600px){
        &{
            background-color: white;
            box-shadow: 4px 5px 5px -5px #b4b4b4;
            position: fixed;
            top: 220px;
            left: 0;
            height: 100%;
            padding-top: 2rem;
            transform: ${({active}) => active ? "translateX(0%)" : "translateX(-100%)"};
            transition: 0.5s all ease;
        }

        .close_filter_menu_icon{
            display: block;
        }

        
    }
`