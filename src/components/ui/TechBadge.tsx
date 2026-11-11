import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiTypescript,
  SiFlutter,
  SiGit,
  SiFigma,
  SiExpress,
  SiKotlin,
  SiAndroid,
} from "react-icons/si";

/** Badge bulat logo teknologi (DESIGN §5.2/§5.3) — 40px putih, shadow-sm. */
const TECH: Record<string, IconType> = {
  next: SiNextdotjs,
  laravel: SiLaravel,
  mysql: SiMysql,
  typescript: SiTypescript,
  flutter: SiFlutter,
  git: SiGit,
  figma: SiFigma,
  express: SiExpress,
  kotlin: SiKotlin,
  android: SiAndroid,
};

export default function TechBadge({
  name,
  size = 40,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = TECH[name];
  if (!Icon) return null;
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-surface text-fg shadow-sm ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Icon size={Math.round(size * 0.5)} />
    </span>
  );
}
