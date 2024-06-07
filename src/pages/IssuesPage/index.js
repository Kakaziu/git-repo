import { useNavigate, useParams } from "react-router-dom"
import { Button, Buttons, Container, Issue, Issues, ReturnButton, SubTitle, Title } from "./styles"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { FaArrowLeft } from 'react-icons/fa'

function IssuesPage() {
  const navigate = useNavigate()
  const { owner, repo } = useParams()
  const [thisRepo, setThisRepo] = useState(null)
  const [issues, setIssues] = useState([])
  const [chooseIssues, setChooseIssues] = useState([])

  useEffect(() => {
    async function loadData() {
      try {
        const responseIssues = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
        const jsonIssues = await responseIssues.json()

        const responseRepo = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
        const jsonRepo = await responseRepo.json()

        if(responseIssues.ok && responseRepo.ok) {
          setIssues(jsonIssues)
          setChooseIssues(jsonIssues)
          setThisRepo(jsonRepo)
        }
        else toast.error("Not found")
      } catch(e) {
        console.log(e)
      }
    }

    loadData()
  }, [owner, repo])

  function filterIssues(filter) {
    if (filter === "todas") return setChooseIssues(issues)

    const filteredIssues = issues.filter(issue => issue.state === filter)
    setChooseIssues(filteredIssues)
  }

  return(
    <Container>
      <Title>{repo.toUpperCase()}</Title>
      <SubTitle>{thisRepo && thisRepo.description}</SubTitle>

      <Buttons>
        <Button onClick={() => filterIssues("todas")}>Todas</Button>
        <Button onClick={() => filterIssues("open")}>Abertas</Button>
        <Button onClick={() => filterIssues("close")}>Fechadas</Button>
      </Buttons>

      <hr/>

      <Issues>
        { chooseIssues.map(issue => (
          <Issue key={issue.id} href={issue.html_url}>
            <img src={issue.user.avatar_url} alt={issue.user.login}/>
            <div>
              <p>{issue.title}</p>
              <span>{issue.user.login}</span>
            </div>
          </Issue>
        )) }
      </Issues>
      <ReturnButton onClick={() => navigate("/")}><FaArrowLeft size="25"/></ReturnButton>
    </Container>
  )
}

export default IssuesPage