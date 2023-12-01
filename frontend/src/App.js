import { useState, useEffect } from "react";
import "./App.css";
import styled from 'styled-components';

const Message = styled.div`
  font-size: 32px;
  color: purple;
  text-align: right;
`;

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #3498db;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: all 0.3s ease-in-out;
  margin: 150px;

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #2980b9;
    box-shadow: 0 2px 3px rgba(0,0,0,0.3);
    transform: translateY(1px);
  }
`;

export default function App() {
  const [isSaturday, setisSaturday] = useState(null);
  const [minutesToSaturday, setminutesToSaturday] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const date = new Date().getTime();
      fetch(process.env.REACT_APP_API_URL + `/isSaturday/${date}`, {
        method: "GET",
      })
        .then((response) => response.text())
        .then(setisSaturday);
    }
    fetchData();
  }, []);

  function onClick() {
    const date = new Date().getTime();
    fetch(process.env.REACT_APP_API_URL + `/minutesToSaturday/${date}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then(setminutesToSaturday);
  }

  return (
    <div className="App">
      {isSaturday === 'true' ? (
        <Message id="isSaturday">Dzisiaj jest sobota! :D</Message>
      ) : (
        <Message></Message>
      )}

      {isSaturday === 'false' ? (
        <Message id="isSaturday">Sobota? To nie dzisiaj :(</Message>
      ) : (
        <Message></Message>
      )}

      <StyledButton id="button" onClick={onClick} >Jak długo mam czekać!?</StyledButton>
      {minutesToSaturday ? (
        <Message id="minutes">Zostało {minutesToSaturday} minut do soboty.</Message>
      ) : null}
    </div>
  );
}
