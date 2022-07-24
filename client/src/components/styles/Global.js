import {createGlobalStyle} from 'styled-components'



export const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-family: 'Raleway', sans-serif;
        font-size: 62.5%;
    }

    img{
        width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    h1{
        font-size: 4rem;
    }

    h2{
        font-size: 3rem;
    }

    h3{
        font-size: 2.5rem;
    }

    h4{
        font-size: 2rem;
    }

    p, span, label, th{
        font-size: 1.8rem;
    }

    .anchor{
        color: #222831;
        text-decoration: none;
    }

    .mb_1{
        margin-bottom: 2rem;
    }

    .mb_2{
        margin-bottom: 3rem;
    }

    .mb_3{
        margin-bottom: 4rem;
    }
    
    
    .title_margin{
        margin-bottom: 4rem;
    }

    .product_price{
        position: relative;
        font-size: 2.3rem;
        
        small{
            font-size: .7rem;
            position: absolute;
            left: -1.4rem;
        }
    }


`

