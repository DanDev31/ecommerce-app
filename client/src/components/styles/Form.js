import styled from "styled-components";


export const FormContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    height: 100%;
    width: 100%;

    .form_logo{
        text-align: center;
        margin: 0 auto;
        width: 10rem;
    }

`

export const Form = styled.form`

    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    margin-top: 2rem;
    min-width: 40rem;
    
    .form_input{
        display: flex;
        flex-direction: column;
        gap:.5rem;

        input{
            border: 1px solid lightgray;
            padding: .8rem;
            outline: none;
        }
    }

    span{
        text-align: center;
    }

    .form_link{
        font-size: 1.5rem;
        text-align: center;

        &:hover{
            text-decoration: underline;
        }
    }

`