import styled from "styled-components";

export const FooterContainer =   styled.footer`
    background-color: #3c3c3c;
    color: white;
    padding: 2rem 0;

    .footer_info_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 3rem;

        .footer_newsletter{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            form{
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                input{
                    border: none;
                    padding: 1rem;
                    outline: none;
                }
            }

            .social_media{
                display: flex;
                gap: 1rem;
                font-size: 2.5rem;
                &>*{
                    cursor: pointer;
                }
            }
            
        }

        .footer_resources{
            display: flex;
            flex-direction: column;
            gap:1rem;
            a{
                color: white;
                text-decoration: none;
            }
        }

    }
    
    .all_right{
        border-top: 1px solid white;
        font-size: 1.4rem;
        text-align: center;
        padding-top: 3rem;
        
    }

    @media (max-width:800px){
        .footer_info_container{
            /* justify-content: center; */
            gap: 5rem;
        }
    }
`