import Nav from "../components/Nav"
import Discover from "../components/Discover"
import styled from "styled-components"
import {motion} from "framer-motion"
import {pageAnimation} from "../Animation"


const Discoverpage = () => {
  return(
   <Styleddiscoverpage 
   style={{ background: "#2F303A" }}
   variants={pageAnimation} 
   initial="hidden"
   animate="show" 
   exit="exit">
       <Nav />
       <Discover />
    </Styleddiscoverpage>
  )
}

const Styleddiscoverpage = styled(motion.div)`
 height: 100vh;
 overflow-y: hidden;
 /* background-color:#2F303A; */

`

export default Discoverpage