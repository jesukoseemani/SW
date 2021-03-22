import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import styled from "styled-components"
import {motion} from "framer-motion"


const Footer = () => {
  return(
<Styledfooter>
    <About>
    <li>About Us</li>
    <li>Contact</li>
    </About>

    <Social>
    <li className="twitter">
    <FontAwesomeIcon style={{color: "#1DA1F2"}} icon={faTwitter}/> 
    <p>Twitter</p>  
    </li>
    <li className="facebook">
    <FontAwesomeIcon style={{color: "#3961b8"}} icon={faFacebookF}/>
    <p>Facebook</p> 
    </li>
    </Social>
</Styledfooter>
  )
}

const Styledfooter = styled(motion.div)`
display: flex;
justify-content: space-between;
align-items: center;
color: #fafafa;
width: 85%;
margin: 0 auto;
height: 20vh;
`

const Social = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
flex-basis: 20%;
.twitter,.facebook{
  display: flex;
  align-items: center;
  p{
    padding-left:.6rem;
  }
}
`

const About = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
flex-basis: 15%;
`

export default Footer