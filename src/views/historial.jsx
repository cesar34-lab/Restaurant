import React from 'react';
import styled from 'styled-components';

function Historial() {
  const reservas = [
    { id: 1, nombre: "Hotel Bogotá Plaza", fecha: "2025-04-26" },
    { id: 2, nombre: "Resort Santa Marta", fecha: "2025-05-02" },
    { id: 3, nombre: "Cabañas Villa de Leyva", fecha: "2025-05-15" },
  ];

  return (
    <Container>
      <h2>Historial de Reservas</h2>
      <ListaReservas>
        {reservas.map((reserva) => (
          <ReservaItem key={reserva.id}>
            <h3>{reserva.nombre}</h3>
            <p>Fecha: {reserva.fecha}</p>
          </ReservaItem>
        ))}
      </ListaReservas>
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  color: white;
  background-color: black;
  min-height: 100vh;
  min-width:100vw;
`;

const ListaReservas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReservaItem = styled.div`
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
  border-radius: 30px;
  background: #212121;
  box-shadow: 15px 15px 30px rgb(0, 0, 0),
             -15px -15px 30px rgb(60, 60, 60);
`;

export default Historial;
