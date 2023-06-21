import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.4rem;
        }
        &::-webkit-scrollbar-track{
            background-color: white;
        }
        &::-webkit-scrollbar-thumb{
            background-color: gray;
            border-radius: 1rem;
        }
    }
    body{
        font-family: "SF Pro Display", serif;
        width: 100%;
    }
    h2{
        font-size: 2rem;
    }
    h3{
        font-size: 1.2rem;
    }
    p{
        font-size: 1.1rem;
        line-height: 200%;
        color: #777;
    }
    a{
        text-decoration:  none;
        color: #000
    }
`;

export default GlobalStyles;
