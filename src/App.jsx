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
    btn_hover_color: "#00fff2",
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
    btn_hover_color: "#00c853",
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
    btn_hover_color: "#ff9500",
    icon: "📈",
  },
  Tecnologia: {
    bg: "#f7f9ff",
    header_bg: "#ffffff",
    header_border: "rgba(0,102,255,0.1)",
    accent: "#0066ff",
    accent2: "#4d94ff",
    text: "#0a0f1e",
    text_dim: "#6b7897",
    logo_gradient: "linear-gradient(135deg, #0066ff, #4d94ff)",
    tagline_color: "#6b7897",
    font_class: "font-tech",
    nav_bg: "rgba(255,255,255,0.9)",
    nav_border: "rgba(0,102,255,0.1)",
    btn_active_bg: "#0066ff",
    btn_active_color: "#ffffff",
    btn_hover_color: "#0066ff",
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
    btn_hover_color: "#00e5c8",
    icon: "🔬",
  },
  Entretenimento: {
    bg: "#fafafa",
    header_bg: "#ffffff",
    header_border: "#e0e0e0",
    accent: "#ff1f6e",
    accent2: "#ffe234",
    text: "#111111",
    text_dim: "#777",
    logo_gradient: "linear-gradient(135deg, #ff1f6e, #ff6b35)",
    tagline_color: "#777",
    font_class: "font-pop",
    nav_bg: "#ffffff",
    nav_border: "#dddddd",
    btn_active_bg: "#111111",
    btn_active_color: "#ffffff",
    btn_hover_color: "#ff1f6e",
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