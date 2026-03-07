import React from "react";
import "./Pageciencia.css";

export default function Pageciencia() {
  return (
    <section className="pagina-ciencia">
      <div className="ciencia-hero">
        <span className="ciencia-badge">🔬 Ciência</span>
        <h2>Descobertas Que Mudam<br/>Nossa Visão do <span>Universo</span></h2>
        <p>Pesquisadores ao redor do mundo fazem avanços sem precedentes — de Marte ao DNA.</p>
      </div>

      <div className="ciencia-card">
        <p>
          O James Webb Space Telescope completou três anos de operação com uma série
          de descobertas que desafiam os modelos cosmológicos vigentes. Galáxias muito
          mais antigas e desenvolvidas do que o esperado foram detectadas, levando
          astrônomos a revisar teorias sobre a formação do universo primitivo.
        </p>
        <p>
          Em paralelo, pesquisadores brasileiros da UNICAMP publicaram estudo pioneiro
          sobre resistência bacteriana que pode transformar o tratamento de infecções
          hospitalares nos próximos anos.
        </p>
        <div className="ciencia-meta">
          <span>07h20</span>
          <span>Ana Luz</span>
          <span>7 min leitura</span>
        </div>
      </div>

      <p className="ciencia-slider-title">◈ EM ÓRBITA</p>
      <div className="ciencia-slider">
        <div className="ciencia-card-slide">
          <p className="tag">Espaço</p>
          <h4>NASA confirma missão tripulada a Marte para 2030</h4>
          <p>Cronograma detalhado divulgado com fases de preparação da missão.</p>
          <p className="card-time">◈ 3h atrás</p>
        </div>
        <div className="ciencia-card-slide">
          <p className="tag">Saúde</p>
          <h4>Vacina contra Alzheimer entra em fase 3 de testes clínicos</h4>
          <p>Resultados mostram redução de 40% das placas beta-amiloide.</p>
          <p className="card-time">◈ 5h atrás</p>
        </div>
        <div className="ciencia-card-slide">
          <p className="tag">Clima</p>
          <h4>2024 foi o ano mais quente da história registrada</h4>
          <p>Dados consolidados confirmam aquecimento acelerado no último ciclo.</p>
          <p className="card-time">◈ 8h atrás</p>
        </div>
        <div className="ciencia-card-slide">
          <p className="tag">Física</p>
          <h4>CERN anuncia possível detecção de nova partícula subatômica</h4>
          <p>Comunidade científica aguarda confirmação dos dados coletados.</p>
          <p className="card-time">◈ Ontem</p>
        </div>
      </div>
    </section>
  );
}