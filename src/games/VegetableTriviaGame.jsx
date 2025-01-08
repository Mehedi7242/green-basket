import React, { useState } from 'react';


const facts = [
    {
      fact: "This vegetable is rich in Vitamin C and helps boost the immune system. It is often used in salads and can be eaten raw or cooked.",
      options: ["Carrot", "Spinach", "Tomato", "Cucumber"],
      answer: "Tomato",
    },
    {
      fact: "This green vegetable is high in fiber and antioxidants. It's commonly used in soups and salads.",
      options: ["Broccoli", "Cabbage", "Lettuce", "Spinach"],
      answer: "Spinach",
    },
    {
      fact: "This vegetable is known for its bright orange color and is rich in beta-carotene, which is beneficial for eye health.",
      options: ["Carrot", "Potato", "Pumpkin", "Corn"],
      answer: "Carrot",
    },
    {
      fact: "This vegetable is often called a superfood due to its high levels of vitamins K, C, and A. It also contains powerful antioxidants.",
      options: ["Kale", "Lettuce", "Cabbage", "Celery"],
      answer: "Kale",
    },
    {
      fact: "This vegetable is known for its ability to improve digestive health due to its high fiber content. It can be eaten raw or steamed.",
      options: ["Cauliflower", "Brussels Sprouts", "Zucchini", "Asparagus"],
      answer: "Cauliflower",
    },
    {
        fact: "This vegetable is a great source of potassium and helps maintain healthy blood pressure. It is commonly eaten raw in salads or as a topping.",
        options: ["Tomato", "Cucumber", "Lettuce", "Carrot"],
        answer: "Cucumber"
      },
      {
        fact: "This leafy green is rich in Vitamin K and helps in blood clotting and bone health. It is commonly added to smoothies and salads.",
        options: ["Spinach", "Kale", "Chard", "Cabbage"],
        answer: "Kale"
      },
      {
        fact: "This vegetable is known for its ability to fight inflammation and promote heart health. It is rich in fiber, vitamins, and minerals.",
        options: ["Broccoli", "Brussels Sprouts", "Cauliflower", "Cabbage"],
        answer: "Broccoli"
      },
      {
        fact: "This bright orange vegetable is an excellent source of beta-carotene and is good for eye health. It is often eaten raw or cooked in soups.",
        options: ["Carrot", "Sweet Potato", "Pumpkin", "Butternut Squash"],
        answer: "Carrot"
      },
      {
        fact: "This vegetable is high in folate and is often used in dishes to improve digestion. It contains compounds that are good for liver health.",
        options: ["Asparagus", "Spinach", "Broccoli", "Kale"],
        answer: "Asparagus"
      },
      {
        fact: "This vegetable is rich in antioxidants and helps detoxify the body. It can be eaten raw in salads or cooked in various dishes.",
        options: ["Red Bell Pepper", "Carrot", "Zucchini", "Spinach"],
        answer: "Red Bell Pepper"
      },
      {
        fact: "This vegetable is rich in iron and helps combat fatigue. It is often used in salads, sandwiches, and smoothies.",
        options: ["Spinach", "Broccoli", "Kale", "Lettuce"],
        answer: "Spinach"
      },
      {
        fact: "This vegetable is known for its high content of Vitamin A and is good for maintaining healthy skin and eyesight. It is commonly used in soups and stews.",
        options: ["Sweet Potato", "Pumpkin", "Carrot", "Squash"],
        answer: "Sweet Potato"
      },
      {
        fact: "This vegetable contains high levels of folate, which supports healthy brain function and cell growth. It's commonly added to salads and stir-fries.",
        options: ["Asparagus", "Brussels Sprouts", "Cabbage", "Lettuce"],
        answer: "Asparagus"
      },
      {
        fact: "This vegetable is a good source of Vitamin C and helps boost immunity. It is often used in soups, stir-fries, and salads.",
        options: ["Broccoli", "Brussels Sprouts", "Cauliflower", "Cabbage"],
        answer: "Broccoli"
      },
      {
        fact: "This vegetable is rich in folate and helps support red blood cell production. It is often used in salads and smoothies.",
        options: ["Beetroot", "Spinach", "Carrot", "Lettuce"],
        answer: "Spinach"
      },
      {
        fact: "This vegetable is high in water content and helps to keep the body hydrated. It is commonly eaten raw in salads or as a refreshing snack.",
        options: ["Cucumber", "Tomato", "Zucchini", "Lettuce"],
        answer: "Cucumber"
      },
      {
        fact: "This vegetable is rich in Vitamin K and is known for its ability to promote bone health. It is often added to salads, smoothies, and soups.",
        options: ["Kale", "Spinach", "Lettuce", "Cabbage"],
        answer: "Kale"
      },
      {
        fact: "This vegetable is rich in antioxidants and can help fight off harmful free radicals in the body. It is commonly used in soups, salads, and sauces.",
        options: ["Tomato", "Carrot", "Red Pepper", "Zucchini"],
        answer: "Tomato"
      },
      {
        fact: "This vegetable is high in fiber and helps promote digestive health. It is commonly eaten steamed or raw in salads.",
        options: ["Cauliflower", "Broccoli", "Brussels Sprouts", "Cabbage"],
        answer: "Cauliflower"
      },
      {
        fact: "This vegetable is rich in Vitamin C and helps in the repair of tissues in the body. It is often eaten raw in salads or as a side dish.",
        options: ["Cabbage", "Broccoli", "Spinach", "Kale"],
        answer: "Cabbage"
      }
  ];

  const VegetableTriviaGame = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [answerSelected, setAnswerSelected] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState("");
  
    const handleAnswer = (selectedAnswer) => {
      if (gameOver) return;
  
      if (!answerSelected) {
        // Check if answer is correct and update score
        if (selectedAnswer === facts[currentQuestion].answer) {
          setScore(score + 1);
        }
  
        // Set the correct answer to show the feedback
        setAnswerSelected(true);
        setCorrectAnswer(facts[currentQuestion].answer);
  
        // After showing feedback, move to the next question
        setTimeout(() => {
          if (currentQuestion < facts.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswerSelected(false);
            setCorrectAnswer("");
          } else {
            setGameOver(true);
          }
        }, 1000); // 1 second delay before moving to next question
      }
    };
  
    const restartGame = () => {
      setScore(0);
      setCurrentQuestion(0);
      setGameOver(false);
      setAnswerSelected(false);
      setCorrectAnswer("");
    };
  
    return (
      <div className="bg-green-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Vegetable Trivia Game</h2>
        {!gameOver ? (
          <>
            <div className="mb-4">
              <p className="text-lg">{facts[currentQuestion].fact}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {facts[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    disabled={answerSelected} // Disable button after selecting an answer
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            {answerSelected && (
              <div className="mt-4 text-center">
                <p className="text-lg">
                  {correctAnswer === facts[currentQuestion].answer
                    ? "Correct! 🎉"
                    : `Incorrect. The correct answer is: ${correctAnswer}.`}
                </p>
              </div>
            )}
            <p className="mt-4 text-center">Score: {score}</p>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Game Over!</h3>
            <p className="mb-4">Your final score is: {score}</p>
            <button
              onClick={restartGame}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Restart Game
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default VegetableTriviaGame;