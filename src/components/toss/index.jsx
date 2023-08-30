import React, { useState } from 'react';
import Wrapper from './style';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Toss = () => {
  const team1 = useSelector(state => state.team1);
  const team2 = useSelector(state => state.team2);
  const [result, setResult] = useState('');
  const [isRotating, setIsRotating] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [tossWinner, setTossWinner] = useState('');
  const [coinTapped, setCoinTapped] = useState(false); // New state variable to track if coin is tapped

  const handleToss = () => {
    if (!isRotating) {
      setIsRotating(true);

      setTimeout(() => {
        const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
        setResult(randomResult);

        const winner = randomResult === 'Heads' ? team1 : team2;
        setWinnerMessage(`The winner is ${winner}!`);
        setTossWinner(winner);
        setCoinTapped(true); // Update coinTapped state

        setIsRotating(false);
      }, 2000);
    }
  };

  const navigate = useNavigate();

  const choice = () => {
    if (!coinTapped) {
      alert('Please tap the coin before proceeding.');
    } else {
      const chosenOption =  prompt(`Team ${tossWinner}, do you want to choose batting or bowling?`);
      if (chosenOption && (chosenOption === 'batting' || chosenOption === 'bowling')) {
        navigate('/scorecard');
      } else {
        alert('Please choose a valid option: batting or bowling.');
      }
    }
  }
  



  
  

  return (
    <Wrapper className="coin-toss-container">
        <h1>{team1} vs {team2}</h1>
        <h2>Let's Toss!!</h2>
        <h3>Tap the coin</h3>

        <p>(if heads comes team 1 will win otherwise team 2)</p>
        
      <div
        className={`coin ${isRotating ? 'rotate' : ''}`}
        onClick={handleToss}
      >
        <div className="side">{result}</div>
      </div>

       <p>{winnerMessage}</p>
      <div id="submit">
        <input 
          type='submit'
          value='Next'
          onClick={choice}
        />
      </div>
    </Wrapper>
  );
};

export default Toss;   