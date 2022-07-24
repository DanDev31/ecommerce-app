import styled from 'styled-components'

export const Nav = styled.nav`
    background-color: #1a2639;
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    .logo{
        width: 5rem;
    }

    .link{
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
    
`

export const TopNav = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3rem;

    .topnav_user_box{
        align-items: center;
        display: flex;
        gap: 2rem;

        .cart_icon{
            position: relative;
            font-size: 2.5rem;
        }

        & span{
            align-items: center;
            color: #1a2639;
            border-radius: 50%;
            background-color: white;
            display: flex;
            justify-content: center;
            position: absolute;
            top: -1rem;
            left: 1.5rem;
            height: 2rem;
            width: 2rem;
        }
    }
`

export const LowerNav = styled.div`
    align-items: center;
    background-color: #3e4a61;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    font-weight: 500;
    gap: 2rem;
    padding: 1.5rem 0;
    
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
        top: 3.2rem;
        left: 0;
        width: 22rem;
        z-index: 100;

        
        .link{
            color: ${({ theme }) => theme.colors.black};
            text-decoration: none;
            padding: 1.5rem 1rem;
            
            &:hover{
                color: white;
                background-color: #102a48;
            }
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin: 0;
        }
    }

    .active{
        display: block;
    }
`


export const Search = styled.form`
    display: flex;
    align-items: center;

    & > *{
        border: none;
        outline: none;
    }

    input{
        padding: 0.5rem;
    }
    button{
        background-color: #4586ff; 
        padding: 0.5rem 0.8rem;
    }
`

