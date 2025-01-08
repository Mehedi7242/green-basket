import React, { useState } from "react";


const choices = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You win! 🎉");
      setUserScore((prevScore) => prevScore + 1);
    } else {
      setResult("Computer wins! 😢");
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Rock, Paper, Scissors</h1>
      
      <div className="flex justify-between w-full max-w-md mb-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Player</h2>
          <p className="text-xl text-green-600">{userScore}</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Computer</h2>
          <p className="text-xl text-red-600">{computerScore}</p>
        </div>
      </div>

      <div className="flex space-x-4 mb-8">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => playGame(choice)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xl mb-4">Your choice: <span className="font-bold">{userChoice || "None"}</span></p>
        <p className="text-xl mb-4">Computer's choice: <span className="font-bold">{computerChoice || "None"}</span></p>
        <p className="text-2xl font-bold text-green-600">{result}</p>
      </div>
      
      <div className="flex space-x-4 mt-8">
        <button
          onClick={() => resetGame()}
          className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition"
        >
          Reset Game
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;
