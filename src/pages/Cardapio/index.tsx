import style from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/img/logo.svg";

export default function Cardapio() {
  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa.</div>
      </header>
      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardápio</h3>
      </section>
    </main>
  );
}
