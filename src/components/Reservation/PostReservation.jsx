import React, { useState, useRef } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

function PostReservation() {
    const [reservation, setReservation] = useState({
      reservationDate: '',
      clientId: '',
      petId: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
  
    const inputRef = useRef(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setReservation((prevState) => ({ ...prevState, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const reservationData = {
        reservationDate: reservation.reservationDate,
        client: {
          id: reservation.clientId,
        },
        pet: {
          id: reservation.petId,
        },
      };
  
      Axios.post('http://localhost:8081/client/postReservation', reservationData)
        .then((response) => {
          console.log(response.data);
          setSuccessMessage('Reservation successfully created.'); // Set success message
        })
        .catch((error) => {
          console.error(error);
          // Handle error
        });
    };
  
    return (
      <Container>
        <FormContainer>
          <FormTitle>Create Reservation</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <InputLabel>Reservation Date:</InputLabel>
              <InputField
                type="text"
                name="reservationDate"
                value={reservation.reservationDate}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel>Client ID:</InputLabel>
              <InputField
                type="number"
                name="clientId"
                value={reservation.clientId}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <InputLabel>Pet ID:</InputLabel>
              <InputField
                type="number"
                name="petId"
                value={reservation.petId}
                ref={inputRef}
                onChange={handleInputChange}
              />
            </FormGroup>
            <SubmitButton type="submit">Create Reservation</SubmitButton>
          </form>
        </FormContainer>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Container>
    );
  }
  
  export default PostReservation;
  
  const Container = styled.div`
    margin-top: 60px;
    display: flex;
    flex: 4;
    flex-direction: column;
    align-items: center;
  `;
  
  const FormContainer = styled.div`
    width: 400px;
    padding: 20px;
    background-color: #112227;
    border-radius: 8px;
  `;
  
  const FormTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  `;
  
  const FormGroup = styled.div`
    margin-bottom: 15px;
  `;
  
  const InputLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  `;
  
  const InputField = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;
  
  const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #1F3D44;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #e60046;
    }
  `;
  
  const SuccessMessage = styled.p`
    color: green;
    font-weight: bold;
    margin-top: 10px;
  `;