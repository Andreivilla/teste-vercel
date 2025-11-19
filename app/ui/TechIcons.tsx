import {
  SiDelphi,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
} from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { IconType } from 'react-icons';

const iconMap = {
  delphi: SiDelphi,
  react: SiReact,
  node: SiNodedotjs,
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
  next: SiNextdotjs,
  vue: SiVuedotjs,
  tailwind: SiTailwindcss,
  sql: TbSql,
  android: DiAndroid,
} as const;

type TechName = keyof typeof iconMap;

interface TechIconProps {
  name: string;
  size?: number;
  color?: string;
}

export function TechIcon({ name, size = 24, color }: TechIconProps) {
  const key = name.toLowerCase() as TechName;
  const IconComponent: IconType | undefined = iconMap[key];

  if (!IconComponent) {
    return <span>❓</span>;
  }

  return <IconComponent size={size} color={color} />;
}
