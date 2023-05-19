import React, { Component, useState } from 'react';
import './App.css';
import { ClientService } from './services/ClientService'
import Axios from "axios";



function App() {

  const [client, setClient] = useState("")


  const getClient = () => {
    Axios.get("http://localhost:8081/client/1000265235").then(
      (response) => {
        
        setClient(response.data.id + "/" + response.data.name + "/" + response.data.address);
      }
    );
  };
  return (
    <div>
      <button onClick={getClient}>Get client</button>
      Este es el cliente: {client}
    </div>  
  );

}

export default App;
/*
export default class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.clientService = new ClientService();
  }

  componentDidMount(){
    this.clientService.getAll().then(data =>{
      console.log(data);
    })
  }

  render(){
    return (
      <div style= {{width:'80', margin: '0 auto', marginTop: '20px'}} >
        <Menubar model={this.items}/>
        <Panel header="React Crud App">
          <DataTable value={this.state.client}>
            <Column field= "id" header="ID"></Column>
            <Column field= "name" header="Name"></Column>
            <Column field= "dateCreated" header="Datre"></Column>
          </DataTable>
        </Panel>
      </div>
    );
  }
}


/*
function App() {
  return (
    <div className="App">
      
      <Header />
      
    </div>
  );
}
*/

