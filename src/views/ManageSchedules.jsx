import React from "react";
import styled from "styled-components";

function ManageSchedules() {
  return (
    <Container>
      <h2>Gestionar Horarios</h2>
      <ScheduleList>
        <p>No hay horarios configurados.</p>
      </ScheduleList>
      <Button>Agregar Horario</Button>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  color: white;
  background-color: black;
  min-height: 100vh;
  
`;

const ScheduleList = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  background: linear-gradient(to right, #333, #555);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to right, #555, #333);
  }
`;

export default ManageSchedules;
