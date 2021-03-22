import styled from "styled-components"
import girl from "../img/girl.svg"
import {motion} from "framer-motion"
const Home = () => {
  return(
    <Styledhome>
      <Imagecorner>
      <img src={girl} alt="girl-with-an-headset"  />
      </Imagecorner>
      <Wordpart>
      <h2>Feel The Music</h2>
      <p>Stream over 20 thousand songs with one click</p>
      </Wordpart>
    </Styledhome>
  )
}

const Styledhome = styled(motion.div)`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 1rem;
 min-height: 60vh;
 max-width: 1200px;
 width:100%;
 margin: 0 auto;


`
const Imagecorner = styled.div`
padding-top: 3rem;
 img{
   height: 70%;
   width: 100%;
   
 }
`
const Wordpart = styled.div`
padding: 10rem 5rem;
h2{
  color:#fafafa;
  font-size: 3rem
}
p{
  color:#fafafa
}
`

export default Home