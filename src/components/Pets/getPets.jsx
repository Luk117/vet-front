import React, { useState, useRef } from "react";
import DataTable from "react-data-table-component";
import { Column } from 'primereact/column';
import Axios from "axios";
import styled from "styled-components";



function GetPets() {

  const [client, setClient] = useState([]);
  const inputRef = useRef(null);

  const getClient = () => {
    Axios.get(`http://localhost:8081/client/${inputRef.current.value}/pets`).then(
      (response) => {
        setClient(response.data);
        console.log(response.data)
      }
    );
  }

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Date Created",
      selector: "dateCreated",
      sortable: true,
    },
  ];

  return (
    <Container>
      <h4>Buscar Mascotas</h4>
      <InputWrapper>
        <InputField ref={inputRef} type="number" placeholder="Enter client ID" />
        <SearchButton onClick={getClient}>Buscar Mascotas</SearchButton>
      </InputWrapper>
      <DataTableContainer>
        <DataTable
        columns={columns}
        data={client}
        className="striped-table"
        pagination
        striped
      />
      </DataTableContainer>
      </Container>
    
  );
}

export default GetPets;

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
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

const Wrap = styled.div`
  margin-top: 20px;
  justify-content: center;
`;

const DataTableContainer = styled.div`
  width: 50%;
  justify-content: center;
  margin-bottom: 60px;
`;