import { FaGithub } from 'react-icons/fa'
import { Button, Container, Form, InputForm, Title } from "./styles"

function Home() {
  return(
    <Container>
      <Title>
        <FaGithub size='22'/>
        <span>Meus repositórios</span>
      </Title>
      <Form>
        <InputForm type='text' placeholder='Adicionar repositório'/>
        <Button>+</Button>
      </Form>
    </Container>
  )
}

export default Home