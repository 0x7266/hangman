const HEAD = (
  <div
    key="head"
    className="w-12 h-12 rounded-full border-neutral-900 border-8 absolute -right-5 top-10"
  />
);
const BODY = (
  <div
    key="body"
    className="w-2 h-28 bg-neutral-900 absolute left-[248px] top-20"
  />
);
const LEFT_ARM = (
  <div
    key="left-arm"
    className="w-2 h-12 bg-neutral-900 absolute left-[230px] top-20 -rotate-45"
  />
);
const RIGHT_ARM = (
  <div
    key="right-arm"
    className="w-2 h-12 bg-neutral-900 absolute left-[267px] top-20 rotate-45"
  />
);
const LEFT_LEG = (
  <div
    key="left-leg"
    className="w-2 h-12 bg-neutral-900 absolute left-[230px] top-[179px] rotate-45"
  />
);
const RIGHT_LEG = (
  <div
    key="right-leg"
    className="w-2 h-12 bg-neutral-900 absolute left-[267px] top-[179px] -rotate-45"
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-10 w-2 bg-neutral-900 ml-[248px] absolute" />
      <div className="h-2 w-[124px] bg-neutral-900 ml-[124px]" />
      <div className="h-96 w-2 bg-neutral-900 ml-[124px]" />
      <div className="h-2 w-64 bg-neutral-900" />
    </div>
  );
}
