import { FaGithub, FaTrash, FaSpinner, FaPlus } from 'react-icons/fa'
import { IoMdMenu } from "react-icons/io";
import { Button, Container, Form, InputForm, Repo, ReposContainer, Title } from "./styles"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("")
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const repos = JSON.parse(localStorage.getItem("repos"))

    if (repos) setRepos(repos)
  }, [])

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repos))
  }, [repos])

  async function addRepo(e) {
    e.preventDefault()
    const searchData = searchValue.split("/")

    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/repos/${searchData[0]}/${searchData[1]}`)
      const json = await response.json()

      if(response.ok) {
        setRepos([...repos, json])
        toast.success("Repositório adicionado")
      } else {
        toast.error("Repositório não encontrado")
      }

      setSearchValue("")
    }catch(e) {
      console.log(e)
    }finally {
      setLoading(false)
    }
  }
  
  function removeRepo(id) {
    const newRepos = repos.filter(repo => repo.id !== id)
    
    setRepos(newRepos)
  }

  return(
    <Container>
      <Title>
        <FaGithub size='22'/>
        <span>Meus repositórios</span>
      </Title>
      <Form onSubmit={addRepo}>
        <InputForm type='text' 
        placeholder='Adicionar repositório' 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}/>
        <Button loading={loading}>
          { loading ? <FaSpinner size={12} color='#FFF'/> : <FaPlus size={12} color='#FFF'/> }
        </Button>
      </Form>
      <ReposContainer>
        { repos.map(repo => (
            <Repo key={repo.id}>
              <span>
                <button onClick={() => removeRepo(repo.id)}><FaTrash size="16"/></button>
                {repo.full_name}
              </span>
              <button onClick={() => navigate(repo.full_name)}><IoMdMenu size="25"/></button>
            </Repo>
        )) }
      </ReposContainer>
    </Container>
  )
}

export default Home