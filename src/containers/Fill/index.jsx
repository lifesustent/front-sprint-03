import styled from 'styled-components';

import fill from '../../assets/img/fill-software.png';

const FillContainer = styled.section``

const FillTitle = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
  color: #292f77 !important;
`

const FillSubtitle = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
`

export default function Fill() {
  return (
    <FillContainer className="container d-flex">
      <div className="row align-items-center p-4 flex-fill">
        <div className="col-md col-sm-12 pt-2">
          <img className="img-fluid" src={fill} alt="Interface intuitiva e personalizável" />
        </div>

        <div className="col-md col-sm-12">
          <FillTitle className="text-secondary">Interface intuitiva e personalizável</FillTitle>
          <FillSubtitle className="mb-4">Nossa interface de usuário é intuitiva e altamente personalizável para atender às necessidades específicas de
          sua cidade. Visualize dados de maneira clara e simplificada, permitindo uma compreensão fácil e rápida.</FillSubtitle>
        </div>
      </div>
    </FillContainer>
  )
}