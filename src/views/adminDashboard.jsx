import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function AdminDashboard() {
    const navigate= useNavigate();
    const handMesas=()=>{
        navigate('/ManageTables')
    }
    const handTime=()=>{
        navigate('/ManageSchedules')
    }
    const handReservations=()=>{
        navigate('/Reservations')
    }
    const handLogout=()=>{
        navigate('/Logout')
    }
  return (
    <Container>
      <Wrapper>
        <h1>Panel de Administración de Restaurante</h1>
        <ButtonPanel>
          <Button onClick={handMesas }>
            Gestionar Mesas
            <InnerButton>
              <Icon />
            </InnerButton>
          </Button>
          <Button onClick={handTime}>
            Gestionar Horarios
            <InnerButton>
              <Icon />
            </InnerButton>
          </Button>
          <Button onClick={handReservations}>
            Ver Reservas
            <InnerButton>
              <Icon />
            </InnerButton>
          </Button>
          <Button onClick={handLogout}>
            Cerrar Sesión
            <InnerButton>
              <Icon />
            </InnerButton>
          </Button>
        </ButtonPanel>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  min-height: 100vh;
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  text-align: center;
  color: white;

  h1 {
    margin-bottom: 40px;
    font-size: 2.5rem;
    background: linear-gradient(to right, #ffffff, #888888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ButtonPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  position: relative;
  padding: 1em 2em;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(to bottom, #171717, #242424);
  border-radius: 9999px;
  cursor: pointer;
  border: 1px solid #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  width: 260px;

  &:hover {
    background: linear-gradient(to bottom, #292929, #171717);
    transform: scale(1.05);
  }
`;

const InnerButton = styled.div`
  background: linear-gradient(to bottom, #171717, #242424);
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #252525;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = () => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    height="20px"
    width="20px"
    className="icon"
  >
    <defs>
      <linearGradient id="adminGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#aaaaaa", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#adminGradient)"
      d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
    />
  </svg>
);

export default AdminDashboard;
