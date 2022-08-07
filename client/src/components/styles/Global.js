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
        height: 100%;
        object-fit: contain;
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

    input{
        font-family: 'Raleway', sans-serif;
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

    .mt_1{
        margin-top: 2rem;
    }

    .mt_2{
        margin-top: 3rem;
    }
    
    .mt_3{
        margin-top: 4rem;
    }
    
    .text_align{
        text-align: center;
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

