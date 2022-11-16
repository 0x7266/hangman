type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) {
  return (
    <div className="flex gap-5 text-5xl uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <div
          className="text-neutral-900 font-extrabold border-b-4 pb-1 border-neutral-900"
          key={index}
        >
          <span
            className={
              guessedLetters.includes(letter) ? "visible" : "invisible"
            }
          >
            {letter}
          </span>
        </div>
      ))}
    </div>
  );
}
