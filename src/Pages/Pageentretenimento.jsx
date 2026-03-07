import React from "react";
import "./Pageentretenimento.css";

export default function Pageentretenimento() {
  return (
    <section className="pagina-entretenimento">
      <div className="ent-hero">
        <span className="ent-faixa">🎬 Entretenimento</span>
        <h2>O QUE ESTÁ<br/><em>BOMBANDO</em><br/>NA CULTURA POP</h2>
        <div className="ent-divider">
          <span/><span/><span/>
        </div>
        <p>Séries, filmes, música e tudo que está dominando as conversas agora.</p>
      </div>

      <div className="ent-card">
        <p>
          O streaming nunca produziu tanto conteúdo — mas também nunca foi tão difícil
          escolher o que assistir. Com dezenas de plataformas disputando atenção e
          orçamentos recordes sendo investidos em produções originais, o espectador
          vive um dilema de riqueza. Mas alguns títulos conseguiram se destacar.
        </p>
        <p>
          Na música, o cenário brasileiro continua em ebulição: o funk paulista, o
          pagodão e o sertanejo universitário travam uma batalha acirrada pelo topo
          das plataformas digitais.
        </p>
        <div className="ent-meta">
          <span>🕐 13h00</span>
          <span>✍️ Bia Torres</span>
          <span>📖 4 min</span>
        </div>
      </div>

      <p className="ent-slider-title">DESTAQUES</p>
      <div className="ent-slider">
        <div className="ent-card-slide">
          <span className="tag">SÉRIE</span>
          <h4>THE LAST OF US S2 ESTREIA COM AUDIÊNCIA RECORDE</h4>
          <p>Temporada supera a estreia da primeira em 80% dos mercados.</p>
          <p className="card-time">🕐 1h atrás</p>
        </div>
        <div className="ent-card-slide">
          <span className="tag">CINEMA</span>
          <h4>NOVO FILME DA MARVEL ARRECADA US$ 300MI NO FIM DE SEMANA</h4>
          <p>Abertura supera projeções e já é a maior do ano no MCU.</p>
          <p className="card-time">🕐 4h atrás</p>
        </div>
        <div className="ent-card-slide">
          <span className="tag">MÚSICA</span>
          <h4>ANITTA LANÇA ÁLBUM SURPRESA E BATE RECORDE NO SPOTIFY</h4>
          <p>Projeto mistura baile funk com referências internacionais.</p>
          <p className="card-time">🕐 6h atrás</p>
        </div>
        <div className="ent-card-slide">
          <span className="tag">REALITY</span>
          <h4>BBB 25 BATE RECORDE DE AUDIÊNCIA NA GRANDE FINAL</h4>
          <p>Finale foi o programa mais assistido do ano na TV aberta.</p>
          <p className="card-time">🕐 Ontem</p>
        </div>
      </div>
    </section>
  );
}