import styled from 'styled-components'

export const Nav = styled.nav`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
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
    background-color: #1a2639;
    display: flex;
    justify-content: space-between;
    padding: 2rem;

    .topnav_user_box{
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

        .profile_box{
            cursor: pointer;
            position: relative;

            .logout{
                background-color: #f1f1f1;
                display: none;
                color: #1a2639;
                position: absolute;
                top: 3rem;
                left: -1rem;
                padding: 2rem 0;

                p{
                    cursor: pointer;
                    padding: .5rem 2rem;
                }
                p:hover{
                    background-color: #1a2639;
                    color: #ffffff;
                    
                }
            }
        }

        .active{
            display: block !important;
        }
    }
`

export const LowerNav = styled.div`
    align-items: center;
    background-color: #f8fcff;
    /* color: ${({ theme }) => theme.colors.white}; */
    color: #102a48;
    display: flex;
    justify-content: center;
    font-weight: 500;
    padding: 2rem 0;
    gap: 6rem;
    
    
    .span_floating_window{
        position: relative;
    }

    span{
        cursor: pointer;
    }

    .floating_window{
        background-color: #f1f9ff;
        display: none;
        font-size: 1.5rem;
        position: absolute;
        top: 4.2rem;
        left: 0;
        width: 30rem;
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
    

    & > *{
        border: none;
        outline: none;
        padding: 1rem;
    }
    
    button{
        align-items: center;
        background-color: #4586ff;
        cursor: pointer;
        display:flex;
        justify-content: center;
        font-size: 1.7rem;
        padding: 0 2rem;
    }
`

