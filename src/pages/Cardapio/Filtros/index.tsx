import filtros from "./filtros.json";
import style from "./Filtros.module.scss";

type IFiltro = typeof filtros[0];

export default function Filtros() {
  function selecionarFiltro(filtro: IFiltro) {}
  return (
    <div className={style.filtros}>
      {filtros.map((filtro) => (
        <button
          className={style.filtros__filtro}
          key={filtro.id}
          onClick={() => selecionarFiltro(filtro)}
        >
          {filtro.label}
        </button>
      ))}
    </div>
  );
}
