import styled from 'styled-components';

const TitleContainer = styled.div`
  margin: 42px 0;
`

const TitleHeading = styled.h2`
  position: relative;
  min-width: 200px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  z-index: 1;

  &:after, &:before {
    content: '';
    position: absolute;
    top: 10px;
    height: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    transform: rotate(120deg);
    z-index: -1;
    opacity: 0.5;
  }

  &:before {
    left: 35%;
    background: #82A1FF;
    width: 40px;
  }

  &:after {
    left: 40%;
    width: 60px;
    border: 2px solid #82A1FF;
  }
`

const Subtitle = styled.p`
  text-align: center;
  max-width: 500px;
`

export default function Title({ title, subtitle }) {
  return (
    <TitleContainer className="d-flex flex-column align-items-center justify-content-center py-8">
      <TitleHeading>{title}</TitleHeading>
      <Subtitle>{subtitle}</Subtitle>
    </TitleContainer>
  )
}