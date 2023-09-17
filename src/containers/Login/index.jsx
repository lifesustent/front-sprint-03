import styled from 'styled-components'

import logo from '../../assets/img/logo.svg'
import { useState } from 'react'

const AuthContainer = styled.section``

const Inner = styled.div``

const Form = styled.form`
  max-width: 330px;
  min-width: 330px;
`

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const updateEmail = (e) => {
    setEmail(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value)
  }

  const updateRemember = (e) => {
    setRemember(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // localStorage.setItem('auth', JSON.stringify({ email, password, remember }))
  }

  return (
    <AuthContainer className='d-flex align-items-center py-4'>
      <Inner className='container'>
        <div className="d-flex align-items-center justify-content-center">
          <Form onSubmit={handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="140" />
            <h1 className="h3 mb-3 fw-normal">Por favor, faça o login</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={updateEmail} />
              <label htmlFor="floatingInput">E-mail</label>
            </div>
            
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={updatePassword} />
              <label htmlFor="floatingPassword">Senha</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" onChange={updateRemember} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lembrar meu usuário
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
          </Form>
        </div>
      </Inner>
    </AuthContainer>
  )
}