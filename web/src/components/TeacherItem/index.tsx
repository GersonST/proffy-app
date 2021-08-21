import React from "react";

import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/34867095?v=4"
          alt="Gerson Severo"
        />
        <div>
          <strong>Gerson Trindade</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
        erat eget dolor volutpat elementum. Pellentesque et sem ut lacus
        tristique elementum id ac nunc. Vivamus malesuada lorem in nulla
        gravida, nec tincidunt diam interdum. Donec tellus orci, sodales in
        eleifend cursus, finibus sit amet ex. Nulla faucibus nibh nisl, vitae
        placerat tellus tempor sed. Nunc in scelerisque mi. Mauris eu massa
        faucibus, tristique ex in, mollis ipsum. Duis ut tellus in libero
        pretium posuere. Curabitur volutpat non est sit amet vehicula. Nunc
        sapien tellus, vehicula sed felis at, euismod placerat turpis.
        Pellentesque id commodo tellus, vel tincidunt nisl. Vivamus eu nunc sem.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
