import React from "react";
import "./Pagetecnologia.css";

export default function Pagetecnologia() {
  return (
    <section className="pagina-tecnologia">
      <div className="tech-hero">
        <div className="tech-hero-left">
          <span className="tech-badge">💻 Tecnologia</span>
          <h2>IA Muda Tudo:<br/><span>O Que Vem Por Aí</span></h2>
          <p>Das startups às gigantes: como a inteligência artificial está redesenhando o mundo em 2025.</p>
          <div className="tech-tags">
            <span className="tech-tag">IA</span>
            <span className="tech-tag">Startups</span>
            <span className="tech-tag">Hardware</span>
            <span className="tech-tag">Privacidade</span>
          </div>
        </div>
        <div className="tech-stat-pill">
          <div className="tech-stat-num">+240%</div>
          <div className="tech-stat-label">Investimento<br/>em IA · 2025</div>
        </div>
      </div>

      <div className="tech-card">
        <p>
          A corrida pela inteligência artificial entrou em uma nova fase. Modelos cada
          vez mais capazes chegam ao mercado com semanas de intervalo, e empresas de
          todos os portes precisam decidir: adaptar ou ficar para trás. O impacto já
          é sentido em setores que vão da medicina ao entretenimento.
        </p>
        <p>
          Enquanto isso, reguladores de todo o mundo correm para criar marcos legais
          à altura da velocidade da inovação. O debate sobre ética e privacidade nunca
          foi tão urgente — e tão complexo.
        </p>
        <div className="tech-meta">
          <span>🕐 08h00</span>
          <span>✍️ Rafael Costa</span>
          <span>📖 6 min</span>
        </div>
      </div>

      <p className="tech-slider-title">// últimas_em_tech</p>
      <div className="tech-slider">
        <div className="tech-card-slide">
          <p className="tag">IA</p>
          <h4>OpenAI lança GPT-5 com capacidade de raciocínio avançado</h4>
          <p>Novo modelo resolve problemas científicos com precisão inédita.</p>
          <p className="card-time">🕐 Hoje cedo</p>
        </div>
        <div className="tech-card-slide">
          <p className="tag">Hardware</p>
          <h4>Apple Silicon M4 Ultra bate recordes em benchmarks de ML</h4>
          <p>Chip da Maçã supera concorrentes x86 em tarefas de machine learning.</p>
          <p className="card-time">🕐 4h atrás</p>
        </div>
        <div className="tech-card-slide">
          <p className="tag">Startup</p>
          <h4>Fintech brasileira capta R$ 400mi em rodada série C</h4>
          <p>Empresa de pagamentos digitais mira expansão para América Latina.</p>
          <p className="card-time">🕐 7h atrás</p>
        </div>
        <div className="tech-card-slide">
          <p className="tag">Regulação</p>
          <h4>União Europeia aprova regulamentação histórica para IA</h4>
          <p>AI Act entra em vigor com regras rígidas para sistemas de alto risco.</p>
          <p className="card-time">🕐 Ontem</p>
        </div>
      </div>
    </section>
  );
}