import type { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

/**
 * Pemetaan id sosial → logo brand (DESIGN §3.5, CONTENT §4).
 * Sumber data tetap `socials` di data.ts; komponen ini hanya ikonnya.
 */
const ICONS: Record<string, IconType> = {
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  github: FaGithub,
  instagram: FaInstagram,
  email: FaEnvelope,
  x: FaXTwitter,
  youtube: FaYoutube,
  facebook: FaFacebookF,
};

export default function SocialIcon({
  id,
  size = 20,
  className = "",
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[id];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
