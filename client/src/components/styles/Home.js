import styled from 'styled-components'

export const HomeFlex = styled.div`
    display: flex;
    gap: 3rem;
    position: relative;

    section{
        flex: 2;
    }

    .filter_icon{
        display:none;
    }

    @media (max-width:600px){
        .filter_icon{
            background-color: #4586ff;
            box-shadow: 0px 1px 4px -1px black;
            border-radius: 50%;
            color: white;
            display:block;
            font-weight: 700;
            width: 3rem;
            height: 3rem;
            padding: 0.5rem;
            position: fixed;
            top: 15rem;
        }
    }
`
