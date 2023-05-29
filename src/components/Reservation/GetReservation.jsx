import React, { useState, useRef } from "react";
import DataTable from "react-data-table-component";
import { Column } from 'primereact/column';
import Axios from "axios";
import styled from "styled-components";



function GetReservations() {

  const [client, setClient] = useState([]);
  const inputRef = useRef(null);

  const getClient = () => {
    Axios.get(`http://localhost:8081/client/${inputRef.current.value}/reservations`).then(
      (response) => {
        setClient(response.data);
        console.log(response.data)
      }
    );
  }

  const columns = [
    {
      name: "ID",
      selector: "idReserva",
      sortable: true,
    },
    {
      name: "Fecha",
      selector: "reservationDate",
      sortable: true,
    },
  ];

  return (

    <Container>
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={getClient}>Buscar Reservas</button>
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

export default GetReservations;

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