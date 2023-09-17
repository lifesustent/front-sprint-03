import styled from 'styled-components'

import logoInverse from '../../assets/img/logo-inverse.svg'

const FooterContainer = styled.footer`
  height: 80px;
  background: #82A1FF;
  display: flex;
  align-items: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <a href="/" class="logo">
          <img src={logoInverse} alt="LifeSustent" />

          <p>Todos os direitos reservados.</p>
        </a>

        <p>Feito com &lt;3 na Fiap</p>
      </div>
    </FooterContainer>
  )
}