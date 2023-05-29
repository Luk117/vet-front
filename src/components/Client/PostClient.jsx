import React, { useState, useRef } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

function PostClient() {
  const [client, setClient] = useState({
    id: '',
    address: '',
    name: '',
    dateCreated: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const clientData = {
      id: client.id,
      address: client.address,
      name: client.name,
      dateCreated: client.dateCreated,
    };

    Axios.post('http://localhost:8081/client/postClient', clientData)
      .then((response) => {
        console.log(response.data);
        setSuccessMessage('Pet successfully created.');
        // Handle successful response
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
      <FormTitle>Crear Cliente</FormTitle>
        <FormGroup>
          <InputLabel>ID:</InputLabel>
          <Input type="number" name="id" value={client.id} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <InputLabel>Direción:</InputLabel>
          <Input type="text" name="address" value={client.address} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <InputLabel>Nombre:</InputLabel>
          <Input type="text" name="name" value={client.name} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup>
          <InputLabel>Fecha de Creación:</InputLabel>
          <Input type="text" name="dateCreated" value={client.dateCreated} onChange={handleInputChange} />
        </FormGroup>
        <Button type="submit">Crear Cliente</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </form>
      </FormContainer>
    </Container>
  );
}

export default PostClient;

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
`;

const InputLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 350px;
  font-size: 18px; 
  width: 120%; /* Add your preferred width */
`;

const Button = styled.button`
  padding: 15px 50px;
  background-color: #1F3D44;
  color: white;
  border: none;
  border-radius: 9px;
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

const textField = styled.div`
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

