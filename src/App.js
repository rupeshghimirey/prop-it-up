import logo from './logo.svg';
import './App.css';
import ContactInfo from './components/ContactInfo.jsx'

function App() {
  return (
    <div className="App">
      <ContactInfo firstName = {"Jane"}
      lastName = {"Doe"}
      age = {45}
      color = {"Black"}>
      </ContactInfo>
      <ContactInfo firstName = {"John"}
      lastName = {"Smith"}
      age = {88}
      color = {"Brown"}>
      </ContactInfo>
      <ContactInfo firstName = {"Milalrd"}
      lastName = {"Fillmore"}
      age = {50}
      color = {"Brown"}>
      </ContactInfo>
      <ContactInfo firstName = {"Maria"}
      lastName = {"Smith"}
      age = {62}
      color = {"Brown"}>
      </ContactInfo>
    </div>
  );
}

export default App;
