import Logo from "@/img/Logo.png";
import Fundo from "@/img/Fundo.png";
import { ButtonCorte } from "./ButtonCorte";
import JoseNeto from "@/img/jose_neto.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        w-full h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
      "
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      <div className="flex items-center justify-center ">

        <div className="flex flex-col gap-20">
          <img className="w-85 h-49 md:h-100 md:w-100" src={Logo} alt="Logo" />
          <div className="md:hidden  ">
            <ButtonCorte />
          </div>
        </div>
      
        <img className="h-100 rounded-2xl hidden md:block" />
      </div>
    </section>
  );
}
