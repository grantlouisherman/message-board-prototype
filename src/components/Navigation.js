import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const renderNavLinks = (channels) => {
  return Object.keys(channels).map((channel) =>
  <Nav.Link key={channel}>{channel}</Nav.Link>);
};

const Navigation = ({ channels, setActiveChannel }) => {
  return (
    <Navbar bg="light" expand="lg" onClick={setActiveChannel}>
      <Navbar.Brand href="#home">Channels</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {renderNavLinks(channels)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
