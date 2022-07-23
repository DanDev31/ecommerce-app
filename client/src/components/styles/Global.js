import styled from 'styled-components'

export const GlobalStyles = styled.div`

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
        font-size: 2.2rem;
    }

    h4{
        font-size: 1.8rem;
    }

    p, span, label{
        font-size: 1.2rem;
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
`

export const Container = styled.div`
    margin: 5rem auto;
    max-width: 130rem;
    width: 90%;
`