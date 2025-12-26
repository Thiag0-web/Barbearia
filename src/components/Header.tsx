import { Menu } from "./Menu";

export default function Header() {
  return (
     <header className="max-w-350 mx-auto flex md:justify-center items-center h-16 mb-10 md:mb-15  md:bg-transparent px-4 md:px-0">
      <nav className="hidden md:block items-center ">
        <ul className="flex items-center gap-7.5 font-poppins ">
          <li>
            <a 
            className="hover:underline"
            href="#inicio">Inicio</a>
          </li>
          <li>
            <a 
            className="hover:underline"
            href="#servico">Serviços</a>
          </li>
          <li>
            <a 
            className="hover:underline"
            href="#contato">Contato</a>
          </li>
          
        </ul>
      </nav>


      <Menu />
    </header>
  );
}
