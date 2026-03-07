import React from "react";
import "./Sidebar.css";

export default function Sidebar({ categorias, onSelect, categoriaAtiva, tema }) {
  return (
    <nav
      className="sidebar"
      style={{
        background: tema.nav_bg,
        borderBottom: `1px solid ${tema.nav_border}`,
      }}
    >
      <div className="sidebar-inner">
        <ul className="lista-categorias">
          {categorias.map((cat) => {
            const ativo = categoriaAtiva === cat;
            return (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => onSelect(cat)}
                  className={`botao-categoria${ativo ? " ativo" : ""}`}
                  style={
                    ativo
                      ? {
                          background: tema.btn_active_bg,
                          color: tema.btn_active_color,
                          borderColor: "transparent",
                        }
                      : {
                          color: tema.text_dim,
                          borderColor: "transparent",
                        }
                  }
                >
                  {cat}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}