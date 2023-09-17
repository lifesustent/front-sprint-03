import { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  height: 680px;
  background: linear-gradient(0deg, #82A1FF, #82A1FF), linear-gradient(0deg, #82A1FF, #82A1FF), #82A1FF;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid #FFFFFF;
`

const Title = styled.h3`
  color: #FFFFFF;
`

const Subtitle = styled.p`
  color: #FFFFFF;
`

const FormContainer = styled.div``

const FormControl = styled.div`
  max-width: 300px;
`

const Input = styled.input`
  max-width: 300px;
  min-width: 300px;
`

const Button = styled.button`
  max-width: 300px;
  min-width: 300px;
`

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(`Formulário enviado com sucesso ${name} ${email}}`)
  }
  
  return (
    <ContactContainer>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col">
            <Title>Não perca mais tempo!</Title>
            <Subtitle>Junte-se a nós e seja parte da mudança em direção a uma cidade mais sustentável. Agende uma demonstração da
              LifeSustent hoje mesmo e descubra como podemos transformar sua cidade em um ambiente mais saudável e próspero
              para todos.</Subtitle>
          </div>

          <form onSubmit={handleSubmit} className="col">
            <FormContainer className="d-flex flex-column justify-content-end align-items-end">
              <FormControl className="mb-3">
                <Input type="name" className="form-control" id="name" placeholder='name' onChange={updateName} />
              </FormControl>

              <FormControl className="mb-3">
                <Input type="email" className="form-control" id="email" placeholder='e-mail' onChange={updateEmail} />
              </FormControl>


              <Button type="submit" className="btn btn-primary rounded-pill">Agendar demonstração <i className="bi bi-calendar ml-4"></i></Button>
            </FormContainer>
          </form>
        </div>
      </div>
    </ContactContainer>
  )
}