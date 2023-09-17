import styled from 'styled-components';

const TitleContainer = styled.div``

export default function Title({ title, subtitle }) {
  return (
    <TitleContainer className="d-flex flex-column">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </TitleContainer>
  )
}