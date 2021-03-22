import Nav from "../components/Nav"
import Home from "../components/Home"
import styled from "styled-components"
import background from "../img/background.svg"
import {motion} from "framer-motion"
import { fade} from "../Animation"


const Mainpage = () => {
  return(
   <Styledmain 
   variants={fade} 
   initial="hidden"
   animate="show" 
   exit="exit">
       <Nav />
       <Home />
    </Styledmain>
  )
}

const Styledmain = styled(motion.div)`
 height: 100vh;
 overflow-y: hidden;
 background-image: url(${background});

`


export default Mainpage