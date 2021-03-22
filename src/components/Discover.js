import microphone from "../img/microphone.svg"
import cover from "../img/cover.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight , faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components"
import {motion} from "framer-motion"

const Discover = () => {
  return(
  <Styleddiscover>
  <Description>
   <h2>Discover New Music</h2>
   <Iconflex>
     <div className="item">
      <img src={microphone} alt="mike"/>
      <p>Charts</p>
     </div>
     <div className="item">
     <FontAwesomeIcon icon={faLayerGroup} />
     <p>Albums</p>
     </div>
     <div className="item">
     <FontAwesomeIcon icon={faArrowCircleRight} />
     <p>More</p>
     </div>
   </Iconflex>
   <p>By joining, You can benefit from listening to new albums released</p>
  </Description>
  <Styledimagecover>
    <img src={cover} alt="cover-copy" />
  </Styledimagecover>
  </Styleddiscover>
  )
}

const Styleddiscover = styled(motion.div)`
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 1rem;
 min-height: 60vh;
 max-width: 1200px;
 width:100%;
 margin: 2rem auto;
`
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction:column;
  margin-top: 6rem;
  margin-left: 3rem;
  
  
`
const Styledimagecover = styled.div`
margin-top: 4.5rem;
margin-left: 10rem;
img{
  height: 20rem
}
`
const Iconflex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width:70%;
margin-top: 1rem;
margin-bottom: 1rem;
img{
  height:3rem;
  width:3rem;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  font-size: 3rem;
  color:#fafafa;
  border: 1px solid #000000;
  padding: 2rem;
  background-color:#000000;
  p{
    margin-top: .7rem;
  }
}
`
export default Discover