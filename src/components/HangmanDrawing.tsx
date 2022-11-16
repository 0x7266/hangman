const HEAD = (
  <div className="w-12 h-12 rounded-full border-neutral-900 border-8 absolute -right-5 top-10" />
);
const BODY = (
  <div className="w-2 h-28 bg-neutral-900 absolute left-[248px] top-20" />
);
const LEFTARM = (
  <div className="w-2 h-12 bg-neutral-900 absolute left-[230px] top-20 -rotate-45" />
);
const RIGHTARM = (
  <div className="w-2 h-12 bg-neutral-900 absolute left-[267px] top-20 rotate-45" />
);
const LEFTLEG = (
  <div className="w-2 h-12 bg-neutral-900 absolute left-[230px] top-[179px] rotate-45" />
);
const RIGHTLEG = (
  <div className="w-2 h-12 bg-neutral-900 absolute left-[267px] top-[179px] -rotate-45" />
);

export default function HangmanDrawing() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {LEFTARM}
      {RIGHTARM}
      {LEFTLEG}
      {RIGHTLEG}
      <div className="h-10 w-2 bg-neutral-900 ml-[248px] absolute" />
      <div className="h-2 w-[124px] bg-neutral-900 ml-[124px]" />
      <div className="h-96 w-2 bg-neutral-900 ml-[124px]" />
      <div className="h-2 w-64 bg-neutral-900" />
    </div>
  );
}
