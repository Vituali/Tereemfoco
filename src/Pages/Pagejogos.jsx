import React from "react";
import "./Pagejogos.css";

export default function Pagejogos() {
  return (
    <section className="pagina-jogos">
      <div className="jogos-scan-line" />

      <div className="jogos-hero">
        <span className="jogos-badge">🎮 Gaming</span>
        <h2>Os <span>Lançamentos</span> Que Vão Dominar 2025</h2>
        <p>De RPGs épicos a indies geniais — o que esperar nos próximos meses do universo gamer.</p>
      </div>

      <div className="jogos-card-principal">
        <p>
          O mercado de jogos nunca esteve tão aquecido. Com grandes franquias confirmando
          sequências aguardadas há anos e estúdios independentes surpreendendo com criatividade
          fora do comum, 2025 promete ser um dos anos mais marcantes da história dos videogames.
        </p>
        <p>
          Entre os destaques, o novo título da FromSoftware já movimenta comunidades inteiras,
          enquanto a Nintendo prepara anúncios que devem sacudir a indústria ainda no primeiro semestre.
        </p>
        <div className="jogos-meta">
          <span>🕐 09h40</span>
          <span>✍️ Carla Freitas</span>
          <span>📖 5 min</span>
        </div>
      </div>

      <p className="jogos-section-title">// EM DESTAQUE</p>
      <div className="jogos-slider">
        <div className="jogos-card-slide">
          <p className="tag">LANÇAMENTO</p>
          <h4>GTA VI tem data confirmada: novembro chega com tudo</h4>
          <p>Rockstar divulga janela de lançamento oficial após anos de espera.</p>
          <p className="card-time">⬡ 1h atrás</p>
        </div>
        <div className="jogos-card-slide">
          <p className="tag">REVIEW</p>
          <h4>Elden Ring: Nightreign eleva o co-op a outro nível</h4>
          <p>Mecânicas inéditas de grupo expandem o universo Soulsborne.</p>
          <p className="card-time">⬡ 3h atrás</p>
        </div>
        <div className="jogos-card-slide">
          <p className="tag">HARDWARE</p>
          <h4>Switch 2 confirma retrocompatibilidade total com a biblioteca anterior</h4>
          <p>Nintendo surpreende com anúncio que agrada veteranos e novatos.</p>
          <p className="card-time">⬡ 6h atrás</p>
        </div>
        <div className="jogos-card-slide">
          <p className="tag">E-SPORTS</p>
          <h4>LOUD garante vaga no mundial de League of Legends</h4>
          <p>Equipe brasileira faz história mais uma vez no cenário global.</p>
          <p className="card-time">⬡ Ontem</p>
        </div>
      </div>
    </section>
  );
}