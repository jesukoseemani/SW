import {createGlobalStyle} from "styled-components"


const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
html{
  &::-webkit-scrollbar{
      width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
      background-color: darkgrey;
  }
  &::-webkit-scrollbar-track {
background: white;
}
}
body{
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  background-color: "#2F303A";
 
}
h2{
  font-size: 2.5rem;
  font-family: 'Abril Fatface', cursive;
  font-weight: lighter;
  color: #fafafa;
}
h3{
  font-size: 1.1rem;
  color: #fafafa;
  padding: 1.5rem 0rem;
}
p{
  font-size: 1rem;
  line-height: 200%;
  color: #fafafa;
}
a{
  text-decoration: none;
  color: #fafafa;
}
li{
  list-style: none
}
img{
  display: block;
}
input{
  font-weight: bold;
font-family: "Montserrat", sans-serif;
}

`;

export default GlobalStyles;
