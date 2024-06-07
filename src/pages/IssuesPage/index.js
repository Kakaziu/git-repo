import { useParams } from "react-router-dom"
import { Container, Title } from "./styles"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function IssuesPage() {
  const { owner, repo } = useParams()
  const [issues, setIssues] = useState([])

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
        const json = await response.json()

        if(response.ok) setIssues(json)
        else toast.error("Not found")
      } catch(e) {
        console.log(e)
      }
    }

    loadData()
  }, [owner, repo])

  return(
    <Container>
      <Title>{owner}</Title>
      <button onClick={() => console.log(issues)}>oi</button>
    </Container>
  )
}

export default IssuesPage