import React, { useState, useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Axios from "axios";
import styled from "styled-components";



function MainPage() {

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

  return (

    <Container>
      <div>
        <input ref={inputRef} type="number" />
        <button onClick={getClient}>Buscar Cliente</button>
        
      </div>

        <Wrap>
          <DataTable value={[client]} className="striped-table" tableStyle={{ minWidth: '20rem' }}>
                <Column field="id" header="ID" />
                <Column field="name" header="Name" />
                <Column field="address" header="Address" />
          </DataTable>
        </Wrap>
      </Container>

  );
}

export default MainPage;

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