import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardDetail from "../CardDetails/CardDetail.jsx";



// navigate('/home');


function CardDetails(props) {
  let { id } = useParams();
  const history = useNavigate();
  const data = history.location.state;
  // console.log(props)
  return <CardDetail data={data} />;
}

export default CardDetails;
