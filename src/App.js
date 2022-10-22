import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css"
import Header from './components/Header';
import Pengurus from './components/Pengurus';
import Pideo from './components/Pideo'
import Departemen from './components/Departemen';
import Data from './components/Data';
import Berita from './components/Berita';
import Visi from './components/Visi'
import { Col, Container, Row, Table } from 'react-bootstrap';
import VIsi from './components/Visi';
import Footer from './components/Footer';
import Form from './components/form'


function App() {
  return (
    <div>
      {/* INTRO */}
      <div className="myBG">
        <NavigationBar />
        <Header />
      </div>
      {/* ENF OF INTRO */}

      <div className="pideo">
        <Pideo />
      </div>

      <div className="visi">
        <Visi />
      </div>

      <div className="pengurus">
        <Pengurus />
      </div>

      <div className="data">
        <Data />
      </div>

      <div className="departemen">
        <Departemen />
      </div>

      <div className="berita">
        <Berita />
      </div>

      <div>
        <Form />
      </div>

      <div className="footer">
        <Footer />
      </div>

    </div>
  );
}

export default App;
