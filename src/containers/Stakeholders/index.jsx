import styled from 'styled-components';

import fiapLogo from '../../assets/img/logo-fiap.svg'
import ibmLogo from '../../assets/img/logo-ibm.svg'

const StakeholdersContainer = styled.section``

const Inner = styled.div`
  margin: 72px 0;
`

export default function Stakeholders() {
  return (
    <StakeholdersContainer className="container">
      <Inner className='d-flex flex-column align-items-center justify-content-center'>
        <h6>Acreditado por</h6>

        <div class="d-flex">
          <img src={fiapLogo} className='mx-2' alt="FIAP - Faculdade de Informática e Administração Paulista" />
          <img src={ibmLogo} className='mx-2' alt="IBM" />
        </div>
      </Inner>
    </StakeholdersContainer>
  )
}