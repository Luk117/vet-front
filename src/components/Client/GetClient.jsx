import React, { useState, useRef } from "react";
import DataTable from 'react-data-table-component';
import Axios from "axios";
import styled from "styled-components";



function GetClient() {

  const [client, setClient] = useState(null);
  const inputRef = useRef(null);

  const getClient = () => {
    Axios.get(`http://localhost:8081/client/${inputRef.current.value}`).then(
      (response) => {
        setClient(response.data);
        console.log(response.data)
      }
    );
  }

  const columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,
    },
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Address',
      selector: 'address',
      sortable: true,
    },
  ];

  return (
    <Container>
      <h3>Buscar Cliente</h3>
      <InputContainer>
        <InputField ref={inputRef} type="number" placeholder="Enter client ID" />
        <SearchButton onClick={getClient}>Buscar Cliente</SearchButton>
      </InputContainer>

      <DataTableContainer>
  
        <DataTable
          columns={columns}
          data={client ? [client] : []}
          className="striped-table"
          style={{ minWidth: '40rem' }}
          pagination
          striped
        />
      </DataTableContainer>
    </Container>
  );
}

export default GetClient;

const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
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

const DataTableContainer = styled.div`
  justify-content: center;
  margin-bottom: 60px;
`;