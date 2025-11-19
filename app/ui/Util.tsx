import { ReactNode } from "react";
export function GuestLine({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row gap-x-2">
      <p className="text-green-600">guest</p>
      <p className="text-blue-500">~ resumo</p>
      {children}
    </div>
  );
}
export function BlinkChar() {
  return <span className="text-brand-white-200 animate-blink">█</span>;
}
