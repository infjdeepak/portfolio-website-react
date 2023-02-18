import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
html{
    font-size: 62.5%;
}
body{
    background: #1b1b1b;
    color: #f0f0f0;
    font-family: 'Inter', sans-serif;


}
h1{
    font-size: 5.5rem;
}
h2{
    font-size: 5rem;
    font-weight: lighter;
}
h3{
    font-size: 3rem;
}
h4{
    font-size: 2.5rem;
    font-weight: bold;
   
}
h5{
    font-size: 2rem;
}
p{
    font-size: 2rem;
    padding: 4rem 0;
    color: #ccc;
}
a{
    font-size: 2rem;
    text-decoration: none;
    color: #ccc;
}
span{
    font-size: 5rem;
    font-weight: bold;
    color: #23d997;
}
button{
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 0.3rem solid #23d997;
    background: transparent;
    color: whitesmoke;
    transition: all 0.4s ease;
    &:hover{
        background: #23d997;
        color: #1b1b1b;
    }
}

`;
export default GlobalStyles;
