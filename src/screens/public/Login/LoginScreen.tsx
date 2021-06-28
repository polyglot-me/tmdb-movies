import logo from "../../../assets/logo.2x.png";
import LoginForm from "./LoginForm";

import { toast } from "react-toastify";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { AuthParams } from "../../../types";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StoreAuth } from "../../../store/Auth/AuthAction";

const LoginScreen = ({ userState }: any) => {
  const dispatch = useDispatch();
  const handleSubmit = (loginParams: AuthParams) => {
    const users = userState.data || {};
    const user = users[loginParams.username];
    if (user && user.password === loginParams.password) {
      dispatch(StoreAuth(user));
      toast.success("Loggedin successfully");
    } else {
      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="d-flex flex-fill align-items-center">
      <Container fluid>
        <Row className="justify-content-center">
          <Col className="col-sm-6 col-lg-4 col-md-6">
            <Card className="app-auth-card">
              <Card.Body className="p-5">
                <div className="text-center pb-4">
                  <a href="/home">
                    <img src={logo} className="rounded login-logo" alt="logo" />
                  </a>
                </div>
                <LoginForm onSubmit={handleSubmit} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  userState: state.user,
});
export default connect(mapStateToProps)(LoginScreen);
