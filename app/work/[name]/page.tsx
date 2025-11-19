import { Work } from '@/app/lib/definitions';
import { TechIcon } from '@/app/ui/TechIcons';
import { BsGithub } from 'react-icons/bs';
import { promises as fs } from 'fs';
import path from 'path';

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? '';

  const filePath = path.join(process.cwd(), 'public', 'works', 'works.json');
  const json = await fs.readFile(filePath, 'utf8');
  const works: Work[] = JSON.parse(json);

  const work = works.find((work: Work) => work.nome === decodeURIComponent(name));

  return (
    <main className="flex flex-col px-12 ">
      <h1 className="text-2xl">/trabalhos/{work?.nome}</h1>
      <div className="p-8 hover:">
        <img className="rounded-lg" src={baseUrl + work?.coverImage} alt="" />
      </div>

      <div>
        <div className="inline-flex items-center gap-2 rounded-md border border-zinc-500 p-4 w-auto">
          <h2 className="whitespace-nowrap font-semibold">Skills:</h2>
          <div className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide">
            {work?.techs.map((tech) => (
              <div key={tech} className="shrink-0">
                <TechIcon name={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="mt-4">{work?.description}</p>
        <div className="mt-4 flex flex-col gap-2">
          <span>
            Inicio: {work?.inicio} Fim: {work?.fim}
          </span>
          <span>
            Cargo: {work?.cargo} Empresa: {work?.empresa}
          </span>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        {work?.repositorio && (
          <div className="inline-flex flex-1/2 items-center gap-2 rounded-md border border-zinc-500 p-4 w-auto">
            <a
              href={work?.repositorio}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-2">
                <BsGithub />
                <span>Codigo fonte</span>
              </div>
            </a>
          </div>
        )}
        {work?.site && (
          <div className="inline-flex flex-1/2 items-center gap-2 rounded-md border border-zinc-500 p-4 w-auto">
            <a href={work.site} target="_blank" rel="noopener noreferrer">
              Ver mais {'>'}_
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
