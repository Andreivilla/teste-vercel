import { UdescLogo } from './AsciiArt';
import { Window } from './Windows';
import { GuestLine, BlinkChar } from './Util';

export default function Formacao() {
  return (
    <Window title="Formacao">
      <GuestLine>
        <span className="text-fuchsia-500">$FORMACAO</span>
      </GuestLine>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1/2">
          <UdescLogo />
        </div>
        <div className="flex-1/2">
          <br />
          <span className="text-green-500">Graduação {'>'}</span> UDESC
          Joinville <br />
          <span className="text-red-500"> Curso {'>'} </span> Ciência da
          Computação
          <br />
          <span className="text-cyan-500">Inicio {'>'} </span> 07/2019
          <br />
          <span className="text-yellow-400">Termino {'>'} </span> 08/2025
          <br />
        </div>
      </div>
      <br />
      <GuestLine>
        <BlinkChar />
      </GuestLine>
    </Window>
  );
}
