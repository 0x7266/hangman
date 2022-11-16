import { useCallback, useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./words/wordList.json";

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) {
        return;
      }
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const key = e.key;
      if (!key.match(/^[a-zA-Z]$/)) {
        return;
      }
      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    console.log("render");
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="App bg-zinc-700 min-h-screen w-screen flex flex-col gap-10 justify-center items-center p-10">
      <h1
        className={`uppercase result w-full text-5xl font-bold flex justify-center ${
          isWinner ? "animate-bounce text-green-600 " : ""
        } ${isLoser ? "animate-ping text-red-600" : ""}`}
      >
        {isWinner && "Winner"}
        {isLoser && "Loser"}
      </h1>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}
