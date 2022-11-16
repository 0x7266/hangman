import { useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./words/wordList.json";

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div className="App bg-slate-600 w-screen flex flex-col gap-5 justify-center items-center">
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}
