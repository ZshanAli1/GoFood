import React from "react";
import Card from "react-bootstrap/Card";

export default function CusCard() {
  return (
    <div>
      <Card className='m-3' style={{ width: "18rem", maxHeight: "360px" }}>
        <Card.Img
          variant='top'
          height='180px'
          src='https://source.unsplash.com/random/'
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title.
          </Card.Text>
          <div className='container w-100'>
            <select className='m-2 h-100 bg-success rounded'>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option value={i + 1} key={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className='m-2 h-100 bg-success rounded'>
              <option value='half'>Half</option>
              <option value='full'>Full</option>
            </select>
            <div className='d-inline h-100 fs-5'>Total Price</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
