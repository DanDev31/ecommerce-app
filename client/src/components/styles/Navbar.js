import styled from 'styled-components'

export const Nav = styled.nav`
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    position: sticky;
    top: 0;
    left: 0;
    min-height: 15vh;
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
    gap: 1rem;
    padding: 0 2rem;
    flex: 2;
    z-index: 100;

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

    @media (max-width:800px){
        &{
            flex-direction: column;
            gap: 2rem;
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
    position: relative;
    flex: 1;
    
    .lower_nav_menu{
        display: flex;
        align-items: center;
        justify-content: center;   
        gap: 6rem;
    }

    .mobile_menu_icon{
        display: none;
    }
    
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
        top: 3.25rem;
        left: 0;
        width: 30rem;
        
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

    .lower_nav_menu.active_mobile_menu{
        transform: translateY(0);
        z-index: 10;
    }

    @media (max-width: 800px) {
        &{
            padding: 1rem 0;
        }
    .mobile_menu_icon {
        display: block;
    }

    .lower_nav_menu{
        background-color: white;
        position: absolute;
        top: 3.8rem;
        left: 0;
        height: 90vh;
        width: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateY(-200%);
        transition: 0.5s all ease;   
    }

    .span_floating_window{
        text-align: center;
        transition: 0.5s all ease; 
    }

    .floating_window{
        background-color: #f5f5f5;
        margin-top: 1rem;
        position: unset;
        transition: 0.5s all ease; 
    }

}
 
`


export const Search = styled.form`
    display: flex;

    & > *{
        border: none;
        outline: none;
        padding: 1rem;
    }
    
    input{
        width: 100%;
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

