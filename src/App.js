import React from 'react';
import './App.css';
import MainPage from './components/Client/GetClient';
import Header from './components/Header';
import ImgSlider from './components/imgSlider';
import Home from './components/Home/Home';
import PetSite from './components/Pets/PetSite';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClientSite from './components/Client/ClientSite';
import ReservationSite from './components/Reservation/ReservationSite';


function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/ClientSite" element={<ClientSite/>}/>
          <Route exact path="/PetSite" element={<PetSite/>}/>
          <Route exact path="/ReservationSite" element={<ReservationSite/>}/>
        </Routes>
      </Router>
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

