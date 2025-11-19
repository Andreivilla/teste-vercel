import { ReactNode } from 'react';
import { GuestLine, BlinkChar } from './Util';
export function Resumo() {
  return (
    <>
      <GuestLine>cat Resumo.txt</GuestLine>
      <br />
      <p>
        Formado em Ciência da Computação pela{' '}
        <span className="text-fuchsia-500">UDESC</span>, estou em transição para
        me consolidar como desenvolvedor web full stack. Com experiência em
        projetos que envolvem Vue.js, Node.js, bancos de dados e integrações com
        APIs, busco criar soluções eficientes e centradas no usuário.
      </p>
      <br />
      <GuestLine>
        <BlinkChar />
      </GuestLine>
    </>
  );
}

export function Dados() {
  return (
    <>
      <GuestLine>
        echo <span className="text-fuchsia-500">$NOME</span>
      </GuestLine>

      <p>Andrei Antonio Villa</p>

      <GuestLine>
        echo <span className="text-fuchsia-500">$IDADE</span>
      </GuestLine>

      <p>24</p>

      <GuestLine>
        echo <span className="text-fuchsia-500">$LOCALIDADE</span>
      </GuestLine>

      <p>Florianópolis SC</p>
      <GuestLine>
        <BlinkChar />
      </GuestLine>
    </>
  );
}
