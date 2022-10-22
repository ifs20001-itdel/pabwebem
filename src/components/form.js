import { Button, FloatingLabel, Form } from "react-bootstrap"

const form = () => {
    return (
    <Form style={{width: "40%", marginLeft: "auto", marginRight: "auto", marginTop: "50px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          id="area"
        />
      </FloatingLabel>
      </Form.Group>
      <Button variant="primary" onClick="submitdata()">
        Submit
      </Button>
    </Form>
    )
}

export default form