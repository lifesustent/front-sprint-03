import styled from 'styled-components';
import Title from '../../components/Title';
import { usecases } from './constants';

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

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

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

    @media (max-width: 768px) {
      display: none;
    }
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

    @media (max-width: 768px) {
      align-self: auto;
    }
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
        {usecases.map((usecase, i) => (
           <Step key={i}>
            <h4>{usecase.title}</h4>
            <List>
              {usecase.items.map((item, i) => (
                <ListItem key={i}>{item}</ListItem>
              ))}
            </List>
          </Step>
        ))}
      </Steps>

      <Footnote className='d-flex justify-content-center'>
        <FootnoteText>Com o uso do software LifeSustent para monitoramento da qualidade do ar, as autoridades municipais de Urbana
          podem ter uma visão abrangente e atualizada da situação, permitindo uma abordagem proativa e eficiente na
          melhoria da qualidade do ar na área urbana específica.</FootnoteText>
      </Footnote>
    </UsecaseContainer>
  )
}