import styled from "styled-components"
import {motion} from "framer-motion"

const Join = () => {
  return(
  <Styledjoin>
  <Joindesc>
  <h3>Join the <span className="fun">Fun</span></h3>
  </Joindesc>
  <Styledform>
      <form className="form">
      Name:<br /> <input type="text" /><br />
      Email:<br /> <input type="email" /><br />
      Password:<br /> <input type="password" /><br />
      <input type="submit" value="Join Now" id="submit" />
      </form>
  </Styledform>
  </Styledjoin>
  )
}
const Styledjoin = styled(motion.div)`
display: grid;
 grid-template-columns: 1fr 1fr;
 grid-column-gap: 1rem;
 min-height: 70vh;
 max-width: 1200px;
 width:90%;
 margin: 0 auto;
 justify-content:center;
 align-items:center;
 padding-left:  3rem;
`
const Joindesc = styled.div`
margin-left: 2.5rem;
h3{
  font-size: 3rem
}
.fun{
  font-size:3.5rem;
  color: #d10ed1;
  font-family: 'Poppins', sans-serif;
}
`
const Styledform = styled.div`
 border: 1px solid #202027;
 border-radius: 1rem;
 background-color: #202027;
 height: 80%;
 width:80%;
 .form{
   width: 80%;
   margin: 1.5rem auto;
   color:#fafafa;
   font-size: 1.5rem;
   input{
     margin:.5rem 0rem;
     padding:.6rem;
     width: 100%;
     border: 3px solid #1762A7;
     border-radius: .5rem;
     background-color: #202027;
   }
   #submit{
    margin:1.5rem 0rem;
    background-color: #1762A7;
    color: #fafafa
   }
 }
`
export default Join