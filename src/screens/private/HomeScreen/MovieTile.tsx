import Moment from "react-moment";
import ProgressCircle from "../../../components/ProgressCircle/ProgressCircle";

import { ThreeDots } from "react-bootstrap-icons";
import { Card, Col } from "react-bootstrap";

const MovieTile = ({ movie }: any) => {
  return (
    <Col className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
      <Card className="movie-tile">
        <span className="movie-more-option">
          <ThreeDots size={18} />
        </span>
        <Card.Img variant="top" src={movie.imageUrl} />
        <ProgressCircle percentage={movie.avgVotePercentage} />
        <Card.Body>
          <Card.Title className="">{movie.title}</Card.Title>
          <Card.Text className="secondary-text">
            <Moment format="MMM DD, YYYY">{movie.releaseDate}</Moment>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieTile;
