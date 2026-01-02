import Scissor from "@/img/icon_scissors.png";
import Razor from "@/img/icon razor.png"
import Ustache from "@/img/icon_ ustache.png"
import Beard from "@/img/icon beard.png"

export function Servicos() {
  return (
    <section className="flex flex-col items-center" id="servico">
      <div className="flex items-center justify-center mt-10 mb-20 text-4xl font-abril">
        <h2 className="font-abril">SERVIÇOS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:w-250 mb-15 w-75">
        <div className="aspect-square border border-amber-400 flex flex-col items-center justify-center text-center px-10">
          <img src={Scissor} className="w-14 mb-6" />
          <h3 className="font-abril text-lg tracking-wide mb-3">
            HAIRCUT & BEARD TRIM
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-inter">
            Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend
            odio, luctus viverra sem.
          </p>
        </div>

        <div className="aspect-square border border-amber-400 flex flex-col items-center justify-center text-center px-10">
          <img src={Razor} className="w-14 mb-6" />
          <h3 className="font-abril text-lg tracking-wide mb-3">
            SHAVES & HAIRCUT
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend
            odio, luctus viverra sem.
          </p>
        </div>

        <div className="aspect-square border border-amber-400 flex flex-col items-center justify-center text-center px-10">
          <img src={Beard} className="w-14 mb-6" />
          <h3 className="font-abril text-lg tracking-wide mb-3">
            FACIAL & SHAVE
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend
            odio, luctus viverra sem.
          </p>
        </div>

        <div className="aspect-square border border-amber-400 flex flex-col items-center justify-center text-center px-10">
          <img src={Ustache} className="w-14 mb-6" />
          <h3 className="font-abril text-lg tracking-wide mb-3">THE BIG DAY</h3>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend
            odio, luctus viverra sem.
          </p>
        </div>
      </div>
    </section>
  );
}
