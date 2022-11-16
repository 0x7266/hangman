import styles from "../styles/keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  disabled?: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-7 gap-2">
      {KEYS.map((letter, index) => {
        const isActive = activeLetters.includes(letter);
        const isInactive = inactiveLetters.includes(letter);
        return (
          <button
            key={letter}
            disabled={isInactive || isActive || disabled}
            className={`${
              styles.btn
            } keyboard-letter uppercase border-2 rounded aspect-square p-1 w-12 text-xl ${
              isActive ? "bg-green-900" : ""
            } ${isInactive ? "opacity-20" : ""}`}
            onClick={() => addGuessedLetter(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
