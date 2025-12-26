import Logo from "@/img/Logo.png";
import { Button } from "./ui/button";

export default function App() {
  return (
    <section className="w">
      <div className="flex flex-col">
        <img className="h-90" src={Logo} alt="Logo" />
        <Button 
        className="w-fit items-center justify-center mx-auto mt-30 p-8 
        bg-black border rounded-none border-amber-300">
          <h2 className="text-2xl">AGENDAR CONSULTA</h2>
        </Button>
      </div>
    </section>
  );
}
