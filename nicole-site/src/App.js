import './App.css';
import ClientWork from './components/ClientWork/ClientWork';
import Company from './components/Company/Company';
import About from './components/About/About';
import PersonalWork from './components/PersonalWork/PersonalWork';

function App() {
  return (
    <div className="App-container">
          <header className="App-header">
          </header>
          <div className="App-body">
              <Company />
              <ClientWork />
              <PersonalWork />
              <About /> 
          </div>
    </div>
  );
}

export default App;