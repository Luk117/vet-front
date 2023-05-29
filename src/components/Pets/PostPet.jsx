import React, { useState, useRef } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

function PostPet() {
  const [pet, setPet] = useState({
    id: '',
    name: '',
    dateCreated: '',
    clientId: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPet((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const petData = {
      id: pet.id,
      name: pet.name,
      dateCreated: pet.dateCreated,
      client: {
        id: pet.clientId,
      },
    };

    Axios.post('http://localhost:8081/client/postPet', petData)
      .then((response) => {
        console.log(response.data);
        setSuccessMessage('Pet successfully created.'); // Set success message
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <Container>
      <FormContainer>
    
      <form onSubmit={handleSubmit}>
          <FormTitle>Create Reservation</FormTitle>
          <InputGroup>
            <InputLabel>ID:</InputLabel>
            <InputField type="number" name="id" value={pet.id} onChange={handleInputChange} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Name:</InputLabel>
            <InputField type="text" name="name" value={pet.name} onChange={handleInputChange} />
          </InputGroup>
          <InputGroup>
            <InputLabel>Date Created:</InputLabel>
            <InputField
              type="text"
              name="dateCreated"
              value={pet.dateCreated}
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <InputLabel>Client ID:</InputLabel>
            <InputField
              type="number"
              name="clientId"
              value={pet.clientId}
              ref={inputRef}
              onChange={handleInputChange}
            />
          </InputGroup>
          <SubmitButton type="submit">Create Pet</SubmitButton>
      </form>
      </FormContainer>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </Container>
  );
}

export default PostPet;

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 350px;
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
