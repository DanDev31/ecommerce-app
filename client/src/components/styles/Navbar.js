import styled from 'styled-components'

export const Nav = styled.nav`
    align-items: center;
    background-color: #121e35;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    

    .link{
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
`

export const LowerNav = styled.div`
    align-items: center;
    background-color: #102a48;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    font-weight: 500;
    gap: 2rem;
    padding: 2rem 0;
    
    .span_floating_window{
        position: relative;
    }

    span{
        cursor: pointer;
    }

    .floating_window{
        background-color: white;
        box-shadow: 0px 2px 5px 1px rgb(73, 73, 73);
        display: none;
        font-size: 1.5rem;
        position: absolute;
        top: 2rem;
        left: 0;
        width: 22rem;
        z-index: 100;

        div{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem 2rem;
            margin: 0;
        }
    }

    .active{
        display: block;
    }
`
