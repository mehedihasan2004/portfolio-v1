import { myGithub } from "@/lib/env";
import { FooterSocialIcons } from "./footer-social-icons";

export function Footer() {
  return (
    <footer className="flex flex-col items-center pt-40 pb-20">
      <FooterSocialIcons />
      <a
        href={myGithub}
        target="_blank"
        rel="noopener noreferrer"
        className="leading-10 ease-in-out transition duration-300 hover:text-cyan-400"
      >
        <small className="font-light tracking-widest">
          Designed & Built by Mehedi Hasan
        </small>
      </a>
    </footer>
  );
}
