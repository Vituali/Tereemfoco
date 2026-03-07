import React from "react";
import "./Pagefutebol.css";

export default function Pagefutebol() {
  return (
    <section className="pagina-futebol">
      <div className="futebol-hero">
        <span className="futebol-badge">⚽ Futebol</span>
        <h2>QUEM VAI GANHAR<br/>O <em>BRASILEIRÃO?</em></h2>
        <p>A disputa está acirrada. Análise completa das chances de cada clube na reta final.</p>
      </div>

      <div className="futebol-placar">
        <div className="futebol-time">
          <span className="futebol-time-nome">Flamengo</span>
          <span className="futebol-time-liga">Copa do Brasil · Semi</span>
        </div>
        <div className="futebol-placar-centro">
          <div className="futebol-placar-num">3 · 0</div>
          <div className="futebol-placar-label">Encerrado · 90'</div>
        </div>
        <div className="futebol-time futebol-time:last-child" style={{textAlign:'right'}}>
          <span className="futebol-time-nome">Vasco</span>
          <span className="futebol-time-liga">Copa do Brasil · Semi</span>
        </div>
      </div>

      <div className="futebol-card">
        <p>
          O Campeonato Brasileiro entra em sua reta decisiva com quatro clubes ainda
          matematicamente vivos na briga pelo título. Flamengo e Palmeiras lideram as
          apostas dos especialistas, mas Atlético Mineiro e Botafogo não desistem —
          e a temporada promete emoções até a última rodada.
        </p>
        <p>
          Com a volta dos grandes jogadores das seleções nacionais, os próximos jogos
          serão definidores. Treinadores já ajustam as escalações para o sprint final.
        </p>
        <div className="futebol-meta">
          <span>🕐 11h15</span>
          <span>✍️ Bruno Mendes</span>
          <span>📖 4 min</span>
        </div>
      </div>

      <p className="futebol-slider-title">🔥 Mais Notícias</p>
      <div className="futebol-slider">
        <div className="futebol-card-slide">
          <p className="tag">Racismo</p>
          <h4>VINÍCIUS JR. É ALVO DE RACISMO E ÁRBITRO SUSPENDE PARTIDA</h4>
          <p>UEFA abre processo e promete punição exemplar após o ocorrido.</p>
          <p className="card-time">🕐 5h atrás</p>
        </div>
        <div className="futebol-card-slide">
          <p className="tag">Retorno</p>
          <h4>NEYMAR SINALIZA VOLTA AO FUTEBOL BRASILEIRO EM 2025</h4>
          <p>Empresário confirma negociações avançadas com clube do eixo.</p>
          <p className="card-time">🕐 8h atrás</p>
        </div>
        <div className="futebol-card-slide">
          <p className="tag">Transfer</p>
          <h4>ENDRICK IMPRESSIONA ANCELOTTI NAS PRIMEIRAS SEMANAS</h4>
          <p>Jovem atacante tem futuro promissor confirmado no Real Madrid.</p>
          <p className="card-time">🕐 Ontem</p>
        </div>
        <div className="futebol-card-slide">
          <p className="tag">Seleção</p>
          <h4>BRASIL CONFIRMA AMISTOSOS ANTES DA COPA AMERICA</h4>
          <p>CBF divulga calendário de preparação com dois amistosos em março.</p>
          <p className="card-time">🕐 2 dias</p>
        </div>
      </div>
    </section>
  );
}