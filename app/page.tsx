import type { Work } from './lib/definitions';
import { TechIcon } from './ui/TechIcons';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { Window } from './ui/Windows';
import { Resumo, Dados } from './ui/Sobre';
import Formacao from './ui/Formacao';
import { WorkWindow } from './ui/Windows';
import { MdEmail } from 'react-icons/md';
import { promises as fs } from 'fs';
import path from 'path';

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const filePath = path.join(process.cwd(), 'public', 'works', 'works.json');
  const json = await fs.readFile(filePath, 'utf8');
  const works: Work[] = JSON.parse(json);

  return (
    <div className="flex flex-col">
      <section
        id="home"
        className="min-h-screen flex flex-col justify-around px-12 scroll-mt-20"
      >
        <div>
          <div>
            <p className="text-zinc-500 italic">// Andrei Villa </p>
            <h1 className="text-6xl font-extrabold mt-2">
              Dev <br />
              Full-Stack
            </h1>
          </div>
          <div className="w-full h-100 relative">
            <img
              src={baseUrl + '/perfil-pixel.gif'}
              alt="Andrei Villa"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex gap-2 mb-20 md:mb-12">
          <Link
            href="https://www.linkedin.com/in/andrei-villa-7729801b6/"
            className="hover:text-blue-500"
          >
            <FaLinkedinIn className="w-8 h-8" />
          </Link>
          <Link
            href="https://github.com/Andreivilla"
            className="hover:text-red-500"
          >
            <FaGithub className="w-8 h-8" />
          </Link>
          <Link
            href="mailto:andreivilla63@gmail.com"
            className="hover:text-green-500"
          >
            <MdEmail className="w-8 h-8" />
          </Link>
          <Link
            href="https://docs.google.com/document/d/1scktStG5dNYYbukg_sInGC5IOoLUo0M4padytpNsEag/edit?usp=sharing"
            className="hover:text-yellow-500"
          >
            <IoDocumentTextSharp className="w-8 h-8" />
          </Link>
        </div>
      </section>

      <section id="sobre" className="px-12 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <div className="flex flex-col md:flex-row gap-2">
          <Window title="resumo">
            <Resumo />
          </Window>

          <Window title="dados">
            <Dados />
          </Window>
        </div>
      </section>

      <section id="formacao" className="px-12 mt-10 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4">Formação</h2>
        <Formacao />
      </section>

      <section id="trabalhos" className="px-12 mt-10 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4">Experiencia proficional</h2>
        <div className="flex flex-col gap-4 ">
          {works.map((work) => (
            <div
              className="flex flex-col md:flex-row gap-4 flex-1/2"
              key={work.nome}
            >
              <WorkWindow work={work} />

              <div className="flex flex-col flex-1/2">
                <h2 className="text-2xl mt-2 md:mt-0">{work.nome}</h2>

                <div className="flex gap-2 text-zinc-500">
                  <span>{work.inicio}</span>
                  <span>{work.fim}</span>
                  <span>{work.cargo}</span>
                </div>

                <div>
                  <p>{work.coverDescription}</p>
                </div>

                <div className="flex gap-2 mt-2">
                  {work.techs.map((tech) => (
                    <div key={tech}>
                      <TechIcon name={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="px-12 mt-10 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <div className="md:flex md:gap-4">
          <Link
            href="https://www.linkedin.com/in/andrei-villa-7729801b6/"
            className="flex items-center justify-center w-full py-3 mt-4 text-lg text-white 
          transition-colors duration-300 bg-black border border-white rounded-md 
          hover:border-blue-500 focus:outline-none hover:text-blue-500
          focus:ring-2 "
          >
            <FaLinkedinIn className="w-5 h-5 mr-1" />
            linkedin
          </Link>
          <Link
            href="https://github.com/Andreivilla"
            className="flex items-center justify-center w-full py-3 mt-4 text-lg text-white 
          transition-colors duration-300 bg-black border border-white rounded-md 
          hover:border-red-500 focus:outline-none hover:text-red-500
          focus:ring-2 "
          >
            <FaGithub className="w-8 h-8 mr-1" />
            Github
          </Link>
          <Link
            href="mailto:andreivilla63@gmail.com"
            className="flex items-center justify-center w-full py-3 mt-4 text-lg text-white 
          transition-colors duration-300 bg-black border border-white rounded-md 
          hover:border-green-500 focus:outline-none hover:text-green-500
          focus:ring-2 "
          >
            <MdEmail className="w-8 h-8 mr-1" /> Email
          </Link>
          <Link
            href="https://docs.google.com/document/d/1scktStG5dNYYbukg_sInGC5IOoLUo0M4padytpNsEag/edit?usp=sharing"
            className="flex items-center justify-center w-full py-3 mt-4 text-lg text-white 
          transition-colors duration-300 bg-black border border-white rounded-md 
          hover:border-yellow-500 focus:outline-none hover:text-yellow-500
          focus:ring-2 "
          >
            <IoDocumentTextSharp className="w-8 h-8 mr-1" /> Curriculo
          </Link>
        </div>
      </section>
    </div>
  );
}
