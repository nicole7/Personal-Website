import './App.css';
import ClientWork from './components/ClientWork/ClientWork';
import Company from './components/Company/Company';
import About from './components/About/About';
import PersonalWork from './components/PersonalWork/PersonalWork';

function App() {

  return (
    <div className="App-container">
          <header className="App-header">
              <h1 className="App-subheaderName">Nicole Gasperini</h1>
         
          {/* <div className="App-breakBar">
          _______________________________________________________________________________________________________
          </div> */}
          <div className="App-tabs">
              <Company />
              <ClientWork />
              <PersonalWork />
              <About /> 
          </div>
          {/* <div className="App-breakBar">
              _______________________________________________________________________________________________________
          </div> */}
          
          <h3 className="App-subheaderRole">&#123;Full Stack Software Engineer&#125;</h3>
          </header>
          <div className="App-body">
             
          </div>
    </div>
  );
}

export default App;