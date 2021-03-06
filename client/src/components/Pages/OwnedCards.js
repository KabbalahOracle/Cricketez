import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { fetchOwnedTokens } from "../../api/playerMetadata";
import PlayerCard from "../PlayerCard/PlayerCard";
import { useAuthContext } from "../../context/auth/authContext";

function OwnedCards() {
  const [state, dispatch] = useAuthContext();
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (state.userAddress)
      fetchOwnedTokens(state.userAddress).then((res) => setTokens(res));
  }, [state]);

  return (
    <Container fluid style={{ textAlign: "center" }}>
      {!tokens.length ? (
        <h3>Loading...</h3>
      ) : (
        tokens.map((token, index) => (
          <PlayerCard key={index} data={{ key: token }} owned={true} />
        ))
      )}
    </Container>
  );
}

export default OwnedCards;
