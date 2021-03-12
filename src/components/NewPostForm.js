import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewPostForm = ({ handleNewPostSubmission }) => {
  const [ comment, updateComment ] = useState('');
  const handleTextAreaChange = (e) => updateComment(e.target.value);
  return (
    <Form style={{padding: "100px"}}  onSubmit={e => {
      e.preventDefault();
      handleNewPostSubmission(comment);
      updateComment('');
    }} >
      <Form.Group controlId="Form.ControlTextarea1">
        <Form.Label>Add Comment</Form.Label>
        <Form.Control as="textarea" value={comment} onChange={handleTextAreaChange} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={comment.length ? false : true}>
        Submit
      </Button>
    </Form>
  );
};

export default NewPostForm;
