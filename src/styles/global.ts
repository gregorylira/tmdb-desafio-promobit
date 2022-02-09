import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --orange: #D18000;
        --purple: #2D0C5E;

        --purple-light: #5C16C5;
;

        --text-title: #000000;
        --text-body: #646464;

        --background: #E5E5E5;
        --shape:#ffffff;
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    } 


    html{
        width: 100%;
        height: 100%;
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }



    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }


    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;

    }
    

`;
