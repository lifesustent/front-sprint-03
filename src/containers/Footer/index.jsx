import styled from 'styled-components'

import logoInverse from '../../assets/img/logo-inverse.svg'

const FooterContainer = styled.footer`
  height: 80px;
  background: #82A1FF;
  display: flex;
  align-items: center;
`

const Container = styled.div``

const Logo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
  text-decoration: none;
`

const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
  display: flex;
  align-items: center;
`

export default function Footer() {
  return (
    <FooterContainer>
      <Container className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Logo href="/">
            <img src={logoInverse} alt="LifeSustent" />

            <p className="m-0">Todos os direitos reservados.</p>
          </Logo>

          <Text className="m-0">Feito com &lt;3 na Fiap</Text>
        </div>
      </Container>
    </FooterContainer>
  )
}