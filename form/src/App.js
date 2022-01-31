import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center p-5">
        <h1>Login</h1>
        <Form className="p-5 ">
          <Form.Group id="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default App;