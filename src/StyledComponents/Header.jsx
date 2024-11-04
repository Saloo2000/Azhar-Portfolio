// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
import { useRef } from 'react'
import styled from 'styled-components'

const StyledHeader=styled.header`
  width: 100%;
  margin: 0 auto;
`

const StyledNav=styled.nav`
width: 100%;
display: flex;
justify-content: space-between;
`

const StyledLinks=styled.h2`
  font-size: 1.6rem;
  font-weight: 900;
  padding: 2rem 0 1rem 0;
`

const StyledRow=styled.hr`
border:2px solid black;
`

function Header() {

  const nav=useRef()

  // useGSAP(()=>{
  //   gsap.from("h2",{
  //     y:"100%",
  //     autoAlpha:0,
  //     stagger:1,
  //     duration:"2"
  //   })
  // },nav)

  return (
    <StyledHeader className='child-2'>

<StyledNav ref={nav}>
 <StyledLinks>2024</StyledLinks>
 <StyledLinks>DIGITAL PRESENTATION</StyledLinks>
 <StyledLinks>ADNAN SHAH</StyledLinks>
</StyledNav>

<StyledRow/>

    </StyledHeader>
  )
}

export default Header