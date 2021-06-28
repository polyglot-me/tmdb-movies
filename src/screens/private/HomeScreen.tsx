import logo from "../../assets/logo.png";
import movie from "../../assets/movie.jpeg";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";

import { ClearAuth } from "../../store/Auth/AuthAction";
import { useDispatch } from "react-redux";
import { Search, ThreeDots } from "react-bootstrap-icons";

import {
  Container,
  Navbar,
  Card,
  Nav,
  Row,
  Col,
} from "react-bootstrap";
import { toast } from "react-toastify";
const HomeScreen = (props: any) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(ClearAuth());
    toast.success("Logged out successfully");
  };
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link className="px-2 px-lg-4" href="#search">
            <Search size={19} />
          </Nav.Link>
        </Nav>
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
            <Nav.Link className="px-2 px-lg-4 active" href="/home">
              Movies
            </Nav.Link>
            <Nav.Link className="px-2 px-lg-4" href="/tvshows">
              TV Shows
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
            <Nav.Link className="px-2 px-lg-4 search-icon" href="#search">
              <Search size={19} />
            </Nav.Link>
            <a
              className="mx-1 mx-lg-2 mt-2 mt-lg-0 nav-btn btn btn-movie-planet"
              href="/register"
            >
              Join
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
            return (
              <Col key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                <Card className="movie-tile">
                  <span className="movie-more-option">
                    <ThreeDots size={18} />
                  </span>
                  <Card.Img variant="top" src={movie} />
                  <ProgressCircle percentage={84} />
                  <Card.Body>
                    <Card.Title className="">Godzilla vs KingKong</Card.Title>
                    <Card.Text className="secondary-text">
                      March 24, 2021
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
