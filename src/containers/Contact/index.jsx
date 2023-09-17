import styled from 'styled-components';

const ContactContainer = styled.section`
  height: 680px;
  background: linear-gradient(0deg, #82A1FF, #82A1FF), linear-gradient(0deg, #82A1FF, #82A1FF), #82A1FF;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  border-bottom: 1px solid #FFFFFF;
`

export default function Contact() {
  return (
    <ContactContainer>
      <div className="container">
        <div class="demo-content">
          <h3>Não perca mais tempo!</h3>
          <p>Junte-se a nós e seja parte da mudança em direção a uma cidade mais sustentável. Agende uma demonstração da
            LifeSustent hoje mesmo e descubra como podemos transformar sua cidade em um ambiente mais saudável e próspero
            para todos.</p>
        </div>

        <form class="demo-form" autocomplete="off">
          <input type="text" name="name" placeholder="Nome" />
          <input type="email" name="email" placeholder="E-mail" />
          <button type="submit">Agendar demonstração <span class="fa-solid fa-calendar"></span></button>
        </form>
      </div>
    </ContactContainer>
  )
}