import logo from "../../../assets/logo.png";
import "./HomeScreenStyle.scss";
import MovieTile from "./MovieTile";
import LoadingButton from "../../../components/LoadingButton";

import { toast } from "react-toastify";
import { Movie } from "../../../types";
import { Search } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { ClearAuth } from "../../../store/Auth/AuthAction";
import { useDispatch } from "react-redux";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchMovies } from "./HomeScreenAction";

const HomeScreen = ({ authState, movieState }: any) => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const [currentUser, setCurrentUser] = useState(authState?.data || {});
  const [movies, setMovies] = useState(movieState.data);
  const [currentPage, setCurrentPage] = useState(movieState.currentPage);
  const [totalPages, setTotalPages] = useState(movieState.totalPages);

  const loadMoreMovies = () => {
    setIsFetching(true);
    const nextPage = currentPage + 1;
    dispatch(fetchMovies(nextPage, currentUser.age))
      .then(() => {
        setIsFetching(false);
      })
      .catch((errMsg: string) => {
        toast.error(errMsg);
      });
  };

  useEffect(() => {
    loadMoreMovies();
  }, []);

  useEffect(() => {
    const user = authState?.data || {};
    setCurrentUser(user);
  }, [authState]);

  useEffect(() => {
    setMovies(movieState.data);
    setCurrentPage(movieState.currentPage);
    setTotalPages(movieState.totalPages);
  }, [movieState]);

  const logout = () => {
    dispatch(ClearAuth());
    toast.success("Logged out successfully");
  };
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link className="px-2 px-lg-4 mbl-search-icon" href="#search">
            <Search size={19} />
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="/">
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
          {movies.map((movie: Movie) => {
            return <MovieTile key={movie.id} movie={movie} />;
          })}
        </Row>
        <Row className="d-flex justify-content-center mt-3">
          {currentPage < totalPages && (
            <Row className="col-lg-2 col-sm-6">
              <LoadingButton
                text="Load more"
                type="submit"
                variant="movie-planet"
                loadingText="Loading..."
                isLoading={isFetching}
                size="lg"
                block={true}
                disabled={isFetching}
                onClick={() => loadMoreMovies()}
              />
            </Row>
          )}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  authState: state.auth,
  movieState: state.movie,
});
export default connect(mapStateToProps)(HomeScreen);
