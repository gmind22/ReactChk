import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './CardComponent';

function App() {
  return (
    <>
      <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
      </Navbar>
      <h1 style={{marginTop: "30px"}}>NATURE AT ITS BEST</h1>
      <div className="flexed">
        <CardComponent img={"images/pexels-maike-van-scherpenzeel-19719728.jpg"}/>
        <CardComponent img={"images/pexels-marina-zvada-19562909.jpg"}/>
        <CardComponent img={"images/pexels-sergio-scandroglio-18478712.jpg"}/>
      </div>
      </div>
    </>

  );
}

export default App;
