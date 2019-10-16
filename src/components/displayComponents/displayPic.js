import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
 CardSubtitle
} from 'reactstrap';
import styled from "styled-components"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background: orange
`;

const DisplayPic = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.hdurl} alt="Card image cap" />
        <CardBody>
          <Title>Nasa Photo of the Day.</Title>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          <Button>{props.day}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default DisplayPic;


