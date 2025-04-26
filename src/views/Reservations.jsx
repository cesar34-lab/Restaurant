import React from "react";
import styled from "styled-components";

function Reservations() {
  return (
    <Container>
      <h2>Reservas Realizadas</h2>
      <ReservationList>
        <p>No hay reservas aún.</p>
      </ReservationList>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  color: white;
  background-color: black;
  min-height: 100vh;
`;

const ReservationList = styled.div`
  margin-top: 20px;
`;

export default Reservations;
