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
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetters,
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
            className={`keyboard-letter uppercase border-2 rounded border-neutral-900 bg-slate-500 shadow-md aspect-square p-1 w-12 text-xl visited:opacity-4 active:bg-neutral-900 hover:bg-slate-600 ${
              isActive ? "bg-green-900 disabled:bg-green-900" : ""
            } ${isInactive ? "opacity-20 disabled:bg-slate-800" : ""}`}
            disabled={isInactive || isActive}
            onClick={() => addGuessedLetter(letter)}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
