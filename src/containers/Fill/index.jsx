import styled from 'styled-components';

import fill from '../../assets/img/fill-software.png';

const FillContainer = styled.section``

export default function Fill() {
  return (
    <FillContainer className="container d-flex">
      <div className="row align-items-center p-4 flex-fill">
        <div className="col-md col-sm-12 pt-2">
          <img className="img-fluid" src={fill} alt="Interface intuitiva e personalizável" />
        </div>

        <div className="col-md col-sm-12">
          <h1 className="text-secondary">Interface intuitiva e personalizável</h1>
          <h2 className="mb-4">Nossa interface de usuário é intuitiva e altamente personalizável para atender às necessidades específicas de
          sua cidade. Visualize dados de maneira clara e simplificada, permitindo uma compreensão fácil e rápida.</h2>
        </div>
      </div>
    </FillContainer>
  )
}