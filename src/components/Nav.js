import styled  from "styled-components"
import {Link} from "react-router-dom"
import Logo from "../img/Logo.svg"
import {motion} from "framer-motion"
const Nav = () => {


  return(
   <StyledNav>
      <Link to="/">
     <Styledlogo>
       <img src={Logo} alt="logo"/>
       <h3>Soundwave</h3>
     </Styledlogo>
     </Link>
     <List>
         <li className="unorder-list">
         <Link to="/discover">
           <h3>Discover</h3>
         </Link>
         </li>
         <li className="unorder-list">
         <Link to="/join">
         <h3>Join</h3>  
         </Link> 
         </li>
     </List>    
   </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
color: #fafafa;
margin: .5rem 8rem;
max-width: 1200px;
width:100%;

`
const Styledlogo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img{
  width:2rem;
  height:2rem;
}
h3{
  margin-left: 1rem;
  color:#fafafa
}
`
const List = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-right: 6rem;
h3{
  color:#fafafa;
  font-weight: 200;
}

.unorder-list{
  margin-left: 2rem;
  
}

`

export default Nav