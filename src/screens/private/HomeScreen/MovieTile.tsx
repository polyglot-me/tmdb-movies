import movie from "../../../assets/movie.jpeg";
import { ThreeDots } from "react-bootstrap-icons";
import ProgressCircle from "../../../components/ProgressCircle/ProgressCircle";

import { Card, Col } from "react-bootstrap";

const MovieTile = () => {
  return (
    <Col className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <Card className="movie-tile">
        <span className="movie-more-option">
          <ThreeDots size={18} />
        </span>
        <Card.Img variant="top" src={movie} />
        <ProgressCircle percentage={84} />
        <Card.Body>
          <Card.Title className="">Godzilla vs KingKong</Card.Title>
          <Card.Text className="secondary-text">March 24, 2021</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieTile;
