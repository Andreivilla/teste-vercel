export default function TerminalText({ text }: { text: string[] }) {
  return (
    <>
      <div className="flex flex-row gap-x-2 text-white">
        <p className="text-green-600">gest</p>
        <p className="text-blue-500">~ resumo</p>
        <p>{text}</p>
      </div>
    </>
  );
}
