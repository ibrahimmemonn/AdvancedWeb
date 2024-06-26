import React from "react";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { createUseStyles } from "react-jss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import icon from "../assets/icon.png";

const Header = () => {
  const styles = useStyles();
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className=" shadow p-3  bg-white "
      style={{ paddingTop: 30 }}
    >
      <Container>
        <Navbar.Brand href="#" style={{ marginRight: 40 }}>
          {/* <LazyLoadImage src={icon} alt="icon" /> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={styles.navbar}>
              STATS
            </Nav.Link>
            <Nav.Link href="#action1" className={styles.navbar}>
              FLOOD
            </Nav.Link>
            <Nav.Link href="#action1" className={styles.navbar}>
              GUIDELINES
            </Nav.Link>
            <Nav.Link href="#action1" className={styles.navbar}>
              WE CARE
            </Nav.Link>
            <Nav.Link href="#action1" className={styles.navbar}>
              CONTACT
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button
              variant="outline-danger"
              style={{ width: 150, fontSize: 15 }}
            >
              Contact
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const useStyles = createUseStyles({
  navbar: {
    marginRight: 40,
    color: "#272727",
    fontFamily: "Poppins",
    "&:hover": {
      color: "#B20000",
    },
  },
});
export default Header;
