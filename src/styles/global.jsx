import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --back: #D9C0A3ff;
        --brown: #8C5637;
        --black: #0D0C0A;
        --yellow: #F2B035;
        --mustache: #A67417;
    }

    body{
        background: var(--black);
        color: var(--back);
    }

    body, input, button{
        font-family: 'Birthstone', cursive;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Fleur De Leah', cursive;
        font-weight: bolder;
        font-size: 3rem;
    }

    p{
        color: var(--back)
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }


`;
