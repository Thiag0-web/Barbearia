import { ButtonCorte } from "./ButtonCorte";
import { Menu } from "./Menu";
import Logo from "@/img/Logo.png";

export function Header() {
  return (
    
    <header className="grid grid-cols-3 items-center w-full mx-auto mt-5 mb-10 absolute top-0 left-0 z-20 bg-transparent">
      <div className="flex items-center justify-center ">
        <img className="hidden md:block w-10 h-10 " src={Logo} alt="" />
      </div>
      <nav className="hidden md:block items-center font-abril">
        <ul className="flex items-center justify-center gap-7.5 ">
          <li>
            <a className="hover:underline" href="#inicio">
              Inicio
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#servico">
              Serviços
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:block  ">
        <ButtonCorte />
      </div>
      <div className="col-start-1 justify-self-start md:hidden ml-4">
      <Menu />
      </div>
    </header>
  );
}
