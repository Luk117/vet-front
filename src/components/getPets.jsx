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
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={getClient}>Buscar Mascotas</button>
      </div>

        <Wrap>
        <DataTable
          columns={columns}
          data={client}
          className="striped-table"
          pagination
          striped
        />
        </Wrap>
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
  
`

const Wrap = styled.div`
  margin-top: 20px;
  justify-content: center;
`