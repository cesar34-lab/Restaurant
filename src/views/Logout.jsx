import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // si usas react-router
import styled from 'styled-components';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Aquí puedes limpiar tokens o datos de sesión
    console.log("Sesión cerrada.");
    navigate('/login'); // Redirigir al login
  }, [navigate]);

  return (
    <Container>
      <h2>Cerrando sesión...</h2>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  color: white;
  background-color: black;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Logout;
