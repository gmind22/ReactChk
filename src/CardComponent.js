import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CardComponent({ img }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} height={"300px"}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
