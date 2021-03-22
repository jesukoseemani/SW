import Nav from "../components/Nav"
import Footer from "../components/Footer"
import styled from "styled-components"
import Join from "../components/Join"
import {motion} from "framer-motion"
import {pageAnimation2} from "../Animation"

const Formpage = () => {
  return(
   <Styledformpage style={{ background: "#2F303A" }} 
   variants={pageAnimation2} 
   initial="hidden"
   animate="show">
       <Nav />
       <Join />
       <Footer />
    </Styledformpage>
  )
}

const Styledformpage = styled(motion.div)`
 height: 100vh;
 overflow-y: hidden; 
 /* background-color:#2F303A; */

`

export default Formpage