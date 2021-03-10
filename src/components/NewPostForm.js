import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewPostForm = () => {
  return (
    <Form style={{padding: "100px"}}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Add Comment</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewPostForm;
