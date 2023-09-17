import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/img/logo.svg'

const HeaderContainer = styled.header``

const Button = styled.button`
  background: #82A1FF;
  border-color: #82A1FF;
`

export default function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand">
            <img src={logo} alt="LifeSustent" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav flex-fill mb-2 mb-lg-0 d-flex justify-content-end align-content-center align-items-center">
              <li className="nav-item">
                <Link to={'/'} className="nav-link" aria-current="page">Projeto</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Caso de uso</Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Contato</Link>
              </li>
              <li className="nav-item">
                <Button className="btn btn-primary rounded-pill" onClick={() => navigate('/login')}>Começar</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
}