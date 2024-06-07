import { useParams } from "react-router-dom"
import { Container } from "./styles"

function IssuesPage() {
  const { owner, repo } = useParams()

  return(
    <Container>

    </Container>
  )
}

export default IssuesPage