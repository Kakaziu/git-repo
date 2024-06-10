import { FaGithub, FaTrash, FaSpinner, FaPlus } from 'react-icons/fa'
import { IoMdMenu } from "react-icons/io";
import { Button, Container, Form, InputForm, Repo, ReposContainer, Title } from "./styles"
import { useCallback, useEffect, useState } from 'react'
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

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    async function addRepo() {  
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/repos/${searchValue}`)
        const json = await response.json()

        const hasRepo = repos.find(repo => repo.name === searchValue)

        if(hasRepo) {
          toast.warn("Repositório já consta na lista")
          throw new Error("Repositório já consta na lista")
        }

        const data = {
          name: json.full_name
        }
  
        if(response.ok) {
          setRepos([...repos, data])
          toast.success("Repositório adicionado")
        } else {
          toast.error("Repositório não encontrado")
          throw new Error("Repositório não encontrado")
        }
  
        setSearchValue("")
      }catch(e) {
        console.log(e)
      }finally {
        setLoading(false)
      }
    }

    addRepo()
  }, [repos, searchValue])
  
  const handleDelete = useCallback((repo) => {
    const newRepos = repos.filter(r => r.name !== repo.name)
      
    setRepos(newRepos)
  }, [repos])

  return(
    <Container>
      <Title>
        <FaGithub size='22'/>
        <span>Meus repositórios</span>
      </Title>
      <Form onSubmit={handleSubmit}>
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
            <Repo key={repo.name}>
              <span>
                <button onClick={() => handleDelete(repo)}><FaTrash size="16"/></button>
                {repo.name}
              </span>
              <button onClick={() => navigate(repo.name)}><IoMdMenu size="25"/></button>
            </Repo>
        )) }
      </ReposContainer>
    </Container>
  )
}

export default Home