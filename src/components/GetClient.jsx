import React, { useState, useRef } from "react";
import DataTable from 'react-data-table-component';
import { Column } from 'primereact/column';
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
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={getClient}>Buscar Cliente</button>
        
      </div>

        <Wrap>
          <DataTable
            columns={columns}
            data={client ? [client] : []}
            className="striped-table"
            style={{ minWidth: '40rem' }}
            pagination
            striped

          />
        </Wrap>
      </Container>

  );
}

export default GetClient;

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