import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Pagetecnologia from "./Pages/Pagetecnologia";
import Pagefutebol from "./Pages/Pagefutebol";
import Pagejogos from "./Pages/Pagejogos";
import Pageeconomia from "./Pages/Pageeconomia";
import Pageciencia from "./Pages/Pageciencia";
import Pageentretenimento from "./Pages/Pageentretenimento";

export const TEMAS = {
  Jogos: {
    bg: "#070b14",
    header_bg: "#070b14",
    header_border: "rgba(0,255,242,0.12)",
    accent: "#00fff2",
    accent2: "#ff00aa",
    text: "#e8f4ff",
    text_dim: "#3a5a70",
    logo_gradient: "linear-gradient(135deg, #00fff2, #bf00ff)",
    tagline_color: "#3a5a70",
    font_class: "font-cyber",
    nav_bg: "rgba(7,11,20,0.95)",
    nav_border: "rgba(0,255,242,0.1)",
    btn_active_bg: "linear-gradient(135deg, #00fff2, #bf00ff)",
    btn_active_color: "#070b14",
    icon: "🎮",
  },
  Futebol: {
    bg: "#080f0a",
    header_bg: "#080f0a",
    header_border: "rgba(0,200,83,0.12)",
    accent: "#00c853",
    accent2: "#ffd600",
    text: "#f0fff4",
    text_dim: "#3a6a4a",
    logo_gradient: "linear-gradient(135deg, #00c853, #ffd600)",
    tagline_color: "#3a6a4a",
    font_class: "font-stadium",
    nav_bg: "rgba(8,15,10,0.95)",
    nav_border: "rgba(0,200,83,0.1)",
    btn_active_bg: "linear-gradient(135deg, #00c853, #ffd600)",
    btn_active_color: "#080f0a",
    icon: "⚽",
  },
  Economia: {
    bg: "#0a0a0a",
    header_bg: "#0a0a0a",
    header_border: "#1e1e1e",
    accent: "#ff9500",
    accent2: "#00d084",
    text: "#e8e8e8",
    text_dim: "#444",
    logo_gradient: "linear-gradient(135deg, #ff9500, #ffcc00)",
    tagline_color: "#444",
    font_class: "font-terminal",
    nav_bg: "rgba(10,10,10,0.98)",
    nav_border: "#1e1e1e",
    btn_active_bg: "#ff9500",
    btn_active_color: "#0a0a0a",
    icon: "📈",
  },
  Tecnologia: {
    bg: "#060d1f",
    header_bg: "#060d1f",
    header_border: "rgba(77,148,255,0.15)",
    accent: "#4d94ff",
    accent2: "#00cfff",
    text: "#d8e8ff",
    text_dim: "#2a4a7a",
    logo_gradient: "linear-gradient(135deg, #4d94ff, #00cfff)",
    tagline_color: "#2a4a7a",
    font_class: "font-tech",
    nav_bg: "rgba(6,13,31,0.95)",
    nav_border: "rgba(77,148,255,0.15)",
    btn_active_bg: "linear-gradient(135deg, #4d94ff, #00cfff)",
    btn_active_color: "#060d1f",
    icon: "💻",
  },
  Ciência: {
    bg: "#020810",
    header_bg: "#020810",
    header_border: "rgba(0,229,200,0.08)",
    accent: "#00e5c8",
    accent2: "#7b61ff",
    text: "#d8eef8",
    text_dim: "#2a5a6a",
    logo_gradient: "linear-gradient(135deg, #00e5c8, #7b61ff)",
    tagline_color: "#2a5a6a",
    font_class: "font-cosmos",
    nav_bg: "rgba(2,8,16,0.95)",
    nav_border: "rgba(0,229,200,0.08)",
    btn_active_bg: "linear-gradient(135deg, #00e5c8, #7b61ff)",
    btn_active_color: "#020810",
    icon: "🔬",
  },
  Entretenimento: {
    bg: "#0f0810",
    header_bg: "#0f0810",
    header_border: "rgba(255,31,110,0.2)",
    accent: "#ff1f6e",
    accent2: "#ffe234",
    text: "#fff0f5",
    text_dim: "#4a2035",
    logo_gradient: "linear-gradient(135deg, #ff1f6e, #ff6b35)",
    tagline_color: "#4a2035",
    font_class: "font-pop",
    nav_bg: "rgba(15,8,16,0.95)",
    nav_border: "rgba(255,31,110,0.15)",
    btn_active_bg: "linear-gradient(135deg, #ff1f6e, #ff6b35)",
    btn_active_color: "#0f0810",
    icon: "🎬",
  },
};

const CATEGORIAS = ["Jogos", "Futebol", "Economia", "Tecnologia", "Ciência", "Entretenimento"];

export default function App() {
  const [categoria, setCategoria] = useState("Jogos");
  const tema = TEMAS[categoria];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--tema-bg", tema.bg);
    root.style.setProperty("--tema-accent", tema.accent);
    root.style.setProperty("--tema-text", tema.text);
    document.body.style.background = tema.bg;
    document.body.style.transition = "background 0.5s ease";
  }, [categoria, tema]);

  const renderPage = () => {
    switch (categoria) {
      case "Tecnologia":     return <Pagetecnologia />;
      case "Futebol":        return <Pagefutebol />;
      case "Economia":       return <Pageeconomia />;
      case "Ciência":        return <Pageciencia />;
      case "Entretenimento": return <Pageentretenimento />;
      default:               return <Pagejogos />;
    }
  };

  return (
    <div className={`app-root ${tema.font_class}`} data-tema={categoria.toLowerCase()}>
      <header
        className="app-header"
        style={{
          background: tema.header_bg,
          borderBottom: `1px solid ${tema.header_border}`,
        }}
      >
        <div className="app-header-inner">
          <h1
            className="logo-nome"
            style={{ backgroundImage: tema.logo_gradient }}
          >
            Tere em Foco
          </h1>
          <span className="logo-tagline" style={{ color: tema.text_dim }}>
            {tema.icon}&nbsp; {categoria} · notícias que importam
          </span>
        </div>
      </header>

      <Sidebar
        categorias={CATEGORIAS}
        onSelect={setCategoria}
        categoriaAtiva={categoria}
        tema={tema}
      />

      <div className="app-content">
        <main key={categoria} className="app-main">
          {renderPage()}
        </main>
      </div>

      <footer
        className="app-footer"
        style={{
          borderTop: `1px solid ${tema.header_border}`,
          color: tema.text_dim,
          background: tema.header_bg,
        }}
      >
        © 2025 Tere em Foco · Todos os direitos reservados
      </footer>
    </div>
  );
}