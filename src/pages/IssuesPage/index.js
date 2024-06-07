import { useParams } from "react-router-dom"
import { Button, Buttons, Container, Issue, Issues, SubTitle, Title } from "./styles"
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
      <SubTitle>{thisRepo && thisRepo.description}</SubTitle>

      <Buttons>
        <Button>Todas</Button>
        <Button>Abertas</Button>
        <Button>Fechadas</Button>
      </Buttons>

      <hr/>

      <Issues>
        { issues.map(issue => (
          <Issue key={issue.id} href={issue.html_url}>
            <img src={issue.user.avatar_url} alt={issue.user.login}/>
            <div>
              <p>{issue.title}</p>
              <span>{issue.user.login}</span>
            </div>
          </Issue>
        )) }
      </Issues>
    </Container>
  )
}

export default IssuesPage