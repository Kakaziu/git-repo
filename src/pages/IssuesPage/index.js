import { useParams } from "react-router-dom"
import { Button, Buttons, Container, SubTitle, Title } from "./styles"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function IssuesPage() {
  const { owner, repo } = useParams()
  const [thisRepo, setThisRepo] = useState(null)
  const [issues, setIssues] = useState([])

  useEffect(() => {
    async function loadData() {
      try {
        const responseIssues = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
        const jsonIssues = await responseIssues.json()

        const responseRepo = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
        const jsonRepo = await responseRepo.json()

        if(responseIssues.ok && responseRepo.ok) {
          setIssues(jsonIssues)
          setThisRepo(jsonRepo)
        }
        else toast.error("Not found")
      } catch(e) {
        console.log(e)
      }
    }

    loadData()
  }, [owner, repo])

  return(
    <Container>
      <Title>{repo.toUpperCase()}</Title>
      <SubTitle>{thisRepo.description}</SubTitle>

      <Buttons>
        <Button>Todas</Button>
        <Button>Abertas</Button>
        <Button>Fechadas</Button>
      </Buttons>
    </Container>
  )
}

export default IssuesPage