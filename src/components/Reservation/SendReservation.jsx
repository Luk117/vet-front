import React, { useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';


function SendReservation() {
    const [idReserva, setIdReserva] = useState(0);
  const [reservationDate, setReservationDate] = useState('');
  const [otherField, setOtherField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationData = {
      idReserva,
      reservationDate,
      otherField: "Quedo lista su mascota",
    };

    Axios.post('http://localhost:8081/client/reservations', reservationData)
      .then((response) => {
        console.log(response.data);
        // Handle success
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>Reservation ID:</Label>
        <Input type="number" value={idReserva} onChange={(e) => setIdReserva(e.target.value)} />

        <Label>Reservation Date:</Label>
        <Input type="date" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} />

        <Label>Other Field:</Label>
        <Input type="text" value={otherField} onChange={(e) => setOtherField(e.target.value)} />

        <Button type="submit">Create Reservation</Button>
      </Form>
    </Container>
  );
}
  
  export default SendReservation;

  const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;
