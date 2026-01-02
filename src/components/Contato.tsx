import Local from "@/img/icon_location.png";
import Email from "@/img/icon_envelope.png";
import Telefone from "@/img/icon_phone.png";
import Relogio from "@/img/icon_clock.png";

export function Contato() {
  return (
    <footer
      className="flex flex-col items-center justify-center bg-white text-black scroll-mt-24 "
      id="contato"
    >
      <h2 className="mt-5 text-5xl font-abril font-thin mb-5">Contato</h2>
      <p className="w-89 md:w-324 text-center font-inter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum
        iure ut praesentium dolorem consectetur ex fugit quod quam possimus! Qui
        placeat sunt architecto exercitationem neque porro, saepe laboriosam
        corporis?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center mt-20 mb-20">
        <div className="flex flex-col items-center justify-start gap-2">
          <img src={Local} alt="" />
          <h3 className="font-abril text-2xl">Endereço</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur,
            <br />
            adipisicing elit. Eveniet, ex
          </p>
        </div>

        <div className="flex flex-col items-center justify-start gap-2">
          <img src={Email} alt="" />
          <h3 className="font-abril text-2xl">Email</h3>
          <p className="font-inter">test@email.com</p>
        </div>

        <div className="flex flex-col items-center justify-start gap-2">
          <img src={Telefone} alt="" />
          <h3 className="font-abril text-2xl">Telefone</h3>
          <p className="font-inter">(77)99151-3763</p>
        </div>

        <div className="flex flex-col items-center justify-start gap-2">
          <img src={Relogio} alt="" />
          <h3 className="font-abril text-2xl">Horário de Trabalho</h3>
          <p className="font-inter">
            segunda – sexta: 10–17
            <br />
            sábado – domingo: fechado
          </p>
        </div>
      </div>

      <hr className="h-px w-[90%] border border-amber-400 mx-auto " />
      <p className="m-4 text-center">
        © Copyright Barbershop | 
        <br className="block md:hidden" />
        Site feito por: 
        <a 
        className="underline ml-1"
        href="https://www.linkedin.com/in/thiago-oliveira-web/"
        target="_blank"
        rel="noopener noreferrer">Thiag0-web</a>
      </p>
    </footer>
  );
}
