import React from "react";
import logo from "../../../assets/logo.2x.png";
import RegisterForm from "./RegisterForm";

import { User } from "../../../types";
import { toast } from "react-toastify";
import { CreateUser } from "../../../store/User/CreateUserAction";
import { StoreAuth } from "../../../store/Auth/AuthAction";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const handleSubmit = (newUser: User) => {
    dispatch(CreateUser(newUser));
    dispatch(StoreAuth(newUser));
    toast.success("Registered successfully");
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
                <RegisterForm onSubmit={handleSubmit} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterScreen;
