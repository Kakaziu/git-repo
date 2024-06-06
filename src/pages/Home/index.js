import { FaGithub } from 'react-icons/fa'
import { Container, Title } from "./styles"

function Home() {
  return(
    <Container>
      <Title>
        <FaGithub size='22'/>
        <span>Meus repositórios</span>
      </Title>
    </Container>
  )
}

export default Home