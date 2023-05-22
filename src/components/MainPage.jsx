import React, { useState, useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Axios from "axios";



function MainPage() {
  const [client, setClient] = useState(null);
  const inputRef = useRef(null);

  const getClient = () => {
    Axios.get(`http://localhost:8081/client/${inputRef.current.value}`).then(
      (response) => {
        setClient(response.data);
      }
    );
  }

  return (
    <div>
      <input ref={inputRef} type="number" />
      <button onClick={getClient}>Buscar Cliente</button>


      
      <DataTable value={[client]} className="striped-table" tableStyle={{ minWidth: '20rem' }}>
            <Column field="id" header="ID" />
            <Column field="name" header="Name" />
            <Column field="address" header="Address" />
      </DataTable>
      
    </div>

  );
}

export default MainPage;