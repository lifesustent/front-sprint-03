import { useEffect } from 'react';
import styled from 'styled-components';

const DarhboardContainer = styled.section``;

export default function Dashboard() {
  useEffect(() => {
    const logado = localStorage.getItem('logado')

    if (!logado) {
      alert('Você precisa estar logado para acessar essa página')
      window.location.href = '/login'
    }
  }, [])


  return (
    <DarhboardContainer className='d-flex align-items-center py-4'>
      Dashboard
    </DarhboardContainer>
  )
}