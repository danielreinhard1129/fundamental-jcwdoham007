const rockpaperScissor = (player: "rock" | "paper" | "scissor") => {
  const choices = ["rock", "paper", "scissor"];

  const computer = choices[Math.floor(Math.random() * 3)];

  if (player === computer) {
    return {
      result: "Draw",
      computer,
      player,
    };
  }

  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return {
      result: "Win",
      computer,
      player,
    };
  }

  return {
    result: "Lose",
    computer,
    player,
  };
};

console.log(rockpaperScissor("rock"));
