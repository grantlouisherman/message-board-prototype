import ListGroup from "react-bootstrap/ListGroup";
import Jumbotron from "react-bootstrap/Jumbotron";
import NewPostForm from "./NewPostForm";

const renderMessages = (messages) => {
  return messages.map(message => (
    <ListGroup.Item>{message}</ListGroup.Item>
  ))
};

const renderNoMessagesComponent = () =>(
  <ListGroup>
  <Jumbotron>
  <p>
    No channel as been selected
  </p>
</Jumbotron>
  </ListGroup>
)
const MessageContainer = ({ messages }) => {
  if(!messages) return renderNoMessagesComponent();
  return (
    <>
    <ListGroup style={{margin: "100px"}}>
      {renderMessages(messages)}
    </ListGroup>
    <NewPostForm />
    </>
  )
}

export default MessageContainer;
