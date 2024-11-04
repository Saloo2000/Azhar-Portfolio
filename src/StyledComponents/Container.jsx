import styled from 'styled-components'


const ContainerDiv=styled.div`
     width: 95%;
     margin: 0 auto;
`

function Container({children}) {
  return (
    <ContainerDiv>{children}</ContainerDiv>
  )
}

export default Container