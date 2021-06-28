import logo from "../../../assets/logo.png";
import MovieTile from "./MovieTile";

import { toast } from "react-toastify";
import { Search } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { ClearAuth } from "../../../store/Auth/AuthAction";
import { useDispatch } from "react-redux";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const HomeScreen = ({ authState }: any) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(authState?.data || {});

  useEffect(() => {
    const user = authState?.data || {};
    setCurrentUser(user);
  }, [authState]);

  const logout = () => {
    dispatch(ClearAuth());
    toast.success("Logged out successfully");
  };
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Navbar.Brand href="/home">
          <img
            src={logo}
            alt="Movie Planet Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="px-2 px-lg-4" href="/home">
              Movies
            </Nav.Link>
            <Nav.Link className="px-2 px-lg-4" href="/tvshows">
              TVShows
            </Nav.Link>
            <Nav.Link className="px-2 px-lg-4" href="/people">
              People
            </Nav.Link>
            <Nav.Link className="px-2 px-lg-4" href="#more">
              More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link className="px-2 px-lg-4" href="#search">
              <Search size={19} />
            </Nav.Link>
            <a
              className="mx-1 mx-lg-2 mt-2 mt-lg-0 nav-btn btn btn-movie-planet"
              href="/"
            >
              {currentUser.username}
            </a>
            <a
              className="mx-1 mx-lg-2 mt-2 mt-lg-0 nav-btn btn btn-movie-planet-secondary"
              href="/"
              onClick={() => logout()}
            >
              Logout
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="movies">
        <h3>Popular Movies</h3>
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
            return <MovieTile key={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  authState: state.auth,
});
export default connect(mapStateToProps)(HomeScreen);
