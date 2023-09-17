import styled from 'styled-components';
import Title from '../../components/Title';

const UsecaseContainer = styled.section``

const Steps = styled.div`
  position: relative;
  width: 100%;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin: 60px 0;

  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 100%;
    top: 0;
    left: 50%;
    background: #82A1FF;
    border-radius: 10px;
    transform: translateX(-50%);
  }
`

const Step = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  &:nth-child(even) {
    align-self: flex-end;
  }
`

const List = styled.ul`
  padding-left: 20px;
`

const ListItem = styled.li`
  position: relative;
  list-style: none;

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 10px;
    left: -20px;
    background: #82A1FF;
    border-radius: 50%;
    transform: translateY(-50%);
  }
`

const Footnote = styled.div`
  margin: 42px 0;
`

const FootnoteText = styled.p`
  max-width: 500px;
  font-weight: bold;
  text-align: center;
`

export default function Usecase() {
  return (
    <UsecaseContainer className="container">
      <Title
        title="Caso de uso"
        subtitle="A cidade de Urbana está enfrentando desafios relacionados à qualidade do ar em uma área específica da região
        central. A fim de abordar esse problema e tomar medidas adequadas, a LifeSustent oferece seu software de
        monitoramento da qualidade do ar para ajudar as autoridades municipais a avaliar e melhorar a situação em alguns
        passos."
      />

      <Steps>
        <Step>
          <h4>Configuração do sistema</h4>
          <List>
            <ListItem>As autoridades municipais instalam sensores de qualidade do ar em pontos estratégicos da área
              problemática.</ListItem>
            <ListItem>Os sensores são conectados à plataforma LifeSustent, que coleta e processa os dados em tempo real.</ListItem>
          </List>
        </Step>

        <Step>
          <h4>Monitoramento contínuo</h4>
          <List>
            <ListItem>O software LifeSustent monitora e registra a concentração de poluentes atmosféricos, como dióxido de
              nitrogênio (NO2), material particulado (PM2.5/PM10) e ozônio (O3), provenientes dos sensores instalados.
            </ListItem>
            <ListItem>Os dados são atualizados em tempo real e armazenados na plataforma para análise posterior.</ListItem>
          </List>
        </Step>


        <Step>
          <h4>Análise e visualização dos dados</h4>
          <List>
            <ListItem>O software LifeSustent analisa os dados coletados, identificando tendências, padrões e picos de poluição
              do ar.</ListItem>
            <ListItem>A plataforma fornece uma interface intuitiva e personalizável, onde as autoridades municipais podem
              visualizar os dados em gráficos claros e compreensíveis.</ListItem>
            <ListItem>São fornecidos alertas automáticos sempre que os níveis de poluentes atingirem valores preocupantes,
              permitindo uma resposta rápida.</ListItem>
          </List>
        </Step>

        <Step>
          <h4>Análise de tendências e histórico</h4>
          <List>
            <ListItem>O software LifeSustent oferece ferramentas para análise de séries temporais, permitindo que as
              autoridades municipais identifiquem mudanças ao longo do tempo e compreendam a evolução da qualidade do
              ar.</ListItem>
            <ListItem>Os dados históricos são utilizados para identificar sazonalidades, relacionar eventos climáticos com a
              poluição do ar e obter insights valiosos.</ListItem>
          </List>
        </Step>

        <Step>
          <h4>Aconselhamento e tomada de decisão</h4>
          <List>
            <ListItem>Com base nas análises dos dados coletados, o software LifeSustent utiliza algoritmos de inteligência
              artificial para fornecer aconselhamento personalizado às autoridades municipais.</ListItem>
            <ListItem>Recomendações específicas são oferecidas para melhorar a qualidade do ar, como ajustar padrões de
              tráfego, incentivar o uso de transportes públicos ou implementar medidas de redução de emissões.</ListItem>
          </List>
        </Step>

        <Step>
          <h4>Monitoramento de progresso e relatórios</h4>
          <List>
            <ListItem>A plataforma LifeSustent permite que as autoridades municipais monitorem o progresso das ações tomadas
              para melhorar a qualidade do ar.</ListItem>
            <ListItem>Relatórios completos e personalizáveis podem ser gerados, fornecendo informações sobre o impacto das
              medidas implementadas e a eficácia das estratégias adotadas.</ListItem>
          </List>
        </Step>
      </Steps>

      <Footnote className='d-flex justify-content-center'>
        <FootnoteText>Com o uso do software LifeSustent para monitoramento da qualidade do ar, as autoridades municipais de Urbana
          podem ter uma visão abrangente e atualizada da situação, permitindo uma abordagem proativa e eficiente na
          melhoria da qualidade do ar na área urbana específica.</FootnoteText>
      </Footnote>
    </UsecaseContainer>
  )
}