import React from "react";
import "./Pageeconomia.css";

export default function Pageeconomia() {
  return (
    <section className="pagina-economia">
      <div className="eco-ticker">
        <div className="eco-ticker-item">
          <span className="eco-ticker-name">IBOV</span>
          <span className="eco-ticker-value">128.450</span>
          <span className="eco-ticker-change pos">▲ +1,2%</span>
        </div>
        <span className="eco-ticker-sep">|</span>
        <div className="eco-ticker-item">
          <span className="eco-ticker-name">USD/BRL</span>
          <span className="eco-ticker-value">4,97</span>
          <span className="eco-ticker-change neg">▼ -0,8%</span>
        </div>
        <span className="eco-ticker-sep">|</span>
        <div className="eco-ticker-item">
          <span className="eco-ticker-name">SELIC</span>
          <span className="eco-ticker-value">10,50%</span>
          <span className="eco-ticker-change">— estável</span>
        </div>
        <span className="eco-ticker-sep">|</span>
        <div className="eco-ticker-item">
          <span className="eco-ticker-name">IPCA</span>
          <span className="eco-ticker-value">4,83%</span>
          <span className="eco-ticker-change neg">▲ +0,1%</span>
        </div>
        <span className="eco-ticker-sep">|</span>
        <div className="eco-ticker-item">
          <span className="eco-ticker-name">PETRO</span>
          <span className="eco-ticker-value">$82,40</span>
          <span className="eco-ticker-change pos">▲ +0,6%</span>
        </div>
      </div>

      <span className="eco-badge">◈ ECONOMIA</span>
      <h2>Mercados em Alta: <span>O Que Esperar</span></h2>
      <p className="eco-subtitulo">Análise dos principais indicadores · Atualizado às 14h32</p>

      <div className="eco-data-grid">
        <div className="eco-data-cell">
          <p className="eco-data-label">Ibovespa</p>
          <p className="eco-data-value pos">128.450</p>
          <p className="eco-data-change pos">▲ +2,3% semana</p>
        </div>
        <div className="eco-data-cell">
          <p className="eco-data-label">Dólar</p>
          <p className="eco-data-value neg">R$ 4,97</p>
          <p className="eco-data-change neg">▼ -0,8% hoje</p>
        </div>
        <div className="eco-data-cell">
          <p className="eco-data-label">Desemprego</p>
          <p className="eco-data-value pos">7,8%</p>
          <p className="eco-data-change pos">▼ mínima histórica</p>
        </div>
        <div className="eco-data-cell">
          <p className="eco-data-label">PIB prev.</p>
          <p className="eco-data-value">+2,1%</p>
          <p className="eco-data-change">→ 2025</p>
        </div>
      </div>

      <div className="eco-card">
        <p>
          O mercado financeiro brasileiro encerrou mais uma semana de alta, impulsionado
          pela melhora do cenário fiscal e pela valorização das commodities no exterior.
          O Ibovespa acumulou ganhos expressivos, enquanto o dólar recuou frente ao real
          pela terceira semana consecutiva.
        </p>
        <p>
          Economistas alertam, porém, para os riscos no horizonte: a inflação ao consumidor
          ainda preocupa e o Banco Central deve manter os juros elevados por mais tempo
          do que o mercado antecipava no início do trimestre.
        </p>
        <div className="eco-meta">
          <span>14h32</span>
          <span>Redação</span>
          <span>3 min leitura</span>
        </div>
      </div>

      <p className="eco-slider-title">► ÚLTIMAS</p>
      <div className="eco-slider">
        <div className="eco-card-slide">
          <p className="tag">CÂMBIO</p>
          <h4>Dólar fecha em alta após dados externos frustrarem mercado</h4>
          <p>Moeda americana subiu 0,8% frente ao real nesta sessão.</p>
          <p className="card-time">14h02</p>
        </div>
        <div className="eco-card-slide">
          <p className="tag">BOLSA</p>
          <h4>Ibovespa opera no azul pela segunda semana seguida</h4>
          <p>Índice acumulou ganhos de 2,3% no setor de commodities.</p>
          <p className="card-time">12h45</p>
        </div>
        <div className="eco-card-slide">
          <p className="tag">JUROS</p>
          <h4>Copom mantém Selic e sinaliza cautela no comunicado</h4>
          <p>Mercado aguarda próxima reunião para ajustar posições.</p>
          <p className="card-time">11h30</p>
        </div>
        <div className="eco-card-slide">
          <p className="tag">EMPREGO</p>
          <h4>Desemprego cai para menor nível em 10 anos no Brasil</h4>
          <p>IBGE aponta geração de 180 mil vagas formais em fevereiro.</p>
          <p className="card-time">Ontem</p>
        </div>
      </div>
    </section>
  );
}