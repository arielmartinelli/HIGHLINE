"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsappIcon } from "./Icons";
import { WA_GENERICO } from "@/lib/whatsapp";
import { TEL_DISPLAY } from "@/data/servicios";

const SECCIONES = [
  { href: "#servicios", label: "Lo que hacemos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#horarios", label: "Horarios" },
  { href: "#faq", label: "Preguntas" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!abierto) return;

    document.body.style.overflow = "hidden";

    function alClic(e: MouseEvent) {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !burgerRef.current?.contains(t)) {
        setAbierto(false);
      }
    }
    function alaTecla(e: KeyboardEvent) {
      if (e.key === "Escape") setAbierto(false);
    }
    function alRedimensionar() {
      if (window.innerWidth > 880) setAbierto(false);
    }

    document.addEventListener("click", alClic);
    document.addEventListener("keydown", alaTecla);
    window.addEventListener("resize", alRedimensionar);
    return () => {
      document.removeEventListener("click", alClic);
      document.removeEventListener("keydown", alaTecla);
      window.removeEventListener("resize", alRedimensionar);
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a className="logo" href="#top">
          HIGH<span>LINE</span>
        </a>
        <div className="nav-links">
          {SECCIONES.map((s) => (
            <a key={s.href} href={s.href}>
              {s.label}
            </a>
          ))}
        </div>
        <a className="btn btn-wa" href={WA_GENERICO} target="_blank" rel="noopener">
          <WhatsappIcon />
          WhatsApp
        </a>
        <button
          ref={burgerRef}
          className="burger"
          type="button"
          aria-expanded={abierto}
          aria-controls="navPanel"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        ref={panelRef}
        id="navPanel"
        className={abierto ? "nav-panel open" : "nav-panel"}
      >
        {SECCIONES.map((s) => (
          <a key={s.href} href={s.href} onClick={() => setAbierto(false)}>
            {s.label}
          </a>
        ))}
        <a
          className="btn btn-wa nav-panel-wa"
          href={WA_GENERICO}
          target="_blank"
          rel="noopener"
          onClick={() => setAbierto(false)}
        >
          <WhatsappIcon size={17} />
          Consultar por WhatsApp
        </a>
        <p className="nav-panel-info">
          {TEL_DISPLAY} · Lun a Vie 9 a 17:30 · Sáb 9 a 13
        </p>
      </div>
    </nav>
  );
}
