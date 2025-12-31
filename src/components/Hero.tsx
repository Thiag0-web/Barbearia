import Logo from "@/img/Logo.png";
import Fundo from "@/img/Fundo.png";

export default function App() {
  return (
    <section
      className="
        w-full h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
      "
      style={{ backgroundImage: `url(${Fundo})` }}
    >
      <img className="w-85 h-49" src={Logo} alt="Logo" />
    </section>
  );
}
