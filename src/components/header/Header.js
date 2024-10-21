import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap/Button"
import {Container} from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/" style={{"color": 'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/> Gold
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100'}}
                    navbarScroll>
                        <NavLink to={"/"} className="nav-link">Home</NavLink>
                        <NavLink to={"/watchlist"} className="nav-link">Watch List</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>

    </Navbar>
  )
}

export default Header