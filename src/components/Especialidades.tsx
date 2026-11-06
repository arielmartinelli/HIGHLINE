"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ServicioIcon, WhatsappIcon } from "./Icons";
import { FILTROS, SERVICIOS, type Rubro, type Servicio } from "@/data/servicios";
import { MENSAJE_GENERICO, sufijoVehiculo, waLink } from "@/lib/whatsapp";

export default function Especialidades() {
  const [filtro, setFiltro] = useState<Rubro | "todos">("todos");
  const [seleccion, setSeleccion] = useState<string[]>([]);
  const [abierto, setAbierto] = useState<Servicio | null>(null);
  const [vehiculo, setVehiculo] = useState("");

  const trayRef = useRef<HTMLDivElement>(null);
  const cerrarRef = useRef<HTMLButtonElement>(null);
  const ultimoFoco = useRef<HTMLElement | null>(null);

  const visibles = SERVICIOS.filter((s) => filtro === "todos" || s.cat === filtro);
  const elegidos = seleccion
    .map((id) => SERVICIOS.find((s) => s.id === id))
    .filter((s): s is Servicio => Boolean(s));
  const hayTray = elegidos.length > 0;

  /* La barra cambia de alto según el ancho: medimos en vez de fijar un valor */
  const ajustarEspacio = useCallback(() => {
    const alto = hayTray && trayRef.current ? trayRef.current.offsetHeight : 0;
    document.body.style.paddingBottom = alto ? `${alto + 10}px` : "";
    document.documentElement.style.setProperty(
      "--float-bottom",
      `${alto ? alto + 16 : 22}px`,
    );
  }, [hayTray]);

  useLayoutEffect(() => {
    ajustarEspacio();
  }, [ajustarEspacio, elegidos.length]);

  useEffect(() => {
    window.addEventListener("resize", ajustarEspacio);
    return () => window.removeEventListener("resize", ajustarEspacio);
  }, [ajustarEspacio]);

  useEffect(() => {
    return () => {
      document.body.style.paddingBottom = "";
      document.body.style.overflow = "";
    };
  }, []);

  /* Popup: bloqueo de scroll, foco y cierre con Escape */
  useEffect(() => {
    if (!abierto) return;
    document.body.style.overflow = "hidden";
    cerrarRef.current?.focus();

    function alaTecla(e: KeyboardEvent) {
      if (e.key === "Escape") setAbierto(null);
    }
    document.addEventListener("keydown", alaTecla);
    return () => {
      document.removeEventListener("keydown", alaTecla);
      document.body.style.overflow = "";
      ultimoFoco.current?.focus();
    };
  }, [abierto]);

  function alternar(id: string, on: boolean) {
    setSeleccion((prev) => (on ? [...prev, id] : prev.filter((x) => x !== id)));
  }

  function abrir(s: Servicio, origen: HTMLElement) {
    ultimoFoco.current = origen;
    setAbierto(s);
  }

  const mensajeLista = () =>
    `Hola HIGHLINE! Quería consultar por:\n${elegidos
      .map((s) => `• ${s.nombre}`)
      .join("\n")}${sufijoVehiculo(vehiculo)}`;

  return (
    <>
      <section id="servicios">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Lo que hacemos</p>
            <h2>Tocá cada servicio para ver de qué se trata</h2>
            <p className="lead">
              Abrí el que te interese, leé el detalle y agregalo a tu consulta. Después
              mandás un solo mensaje con todo junto.
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filtrar por rubro">
            {FILTROS.map((f) => (
              <button
                key={f.id}
                className="chip"
                type="button"
                aria-pressed={filtro === f.id}
                onClick={() => setFiltro(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="tiles">
            {visibles.map((s) => {
              const activo = seleccion.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  className={activo ? "tile is-on" : "tile"}
                  aria-haspopup="dialog"
                  onClick={(e) => abrir(s, e.currentTarget)}
                >
                  {s.destacado && <span className="tag">Más pedido</span>}
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  <span className="ico">
                    <ServicioIcon id={s.ico} />
                  </span>
                  <span className="t-name">{s.nombre}</span>
                  <span className="t-sub">{s.sub}</span>
                  <span className="t-more">Ver detalle</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <a
        className="float"
        href={waLink(MENSAJE_GENERICO)}
        target="_blank"
        rel="noopener"
        aria-label="Escribir por WhatsApp"
      >
        <WhatsappIcon size={28} />
      </a>

      <div className={hayTray ? "tray show" : "tray"} ref={trayRef} role="region" aria-label="Tu consulta">
        <div className="wrap tray-in">
          <span className="count">
            <b>{elegidos.length}</b> seleccionados
          </span>
          <span className="names">{elegidos.map((s) => s.nombre).join(" · ")}</span>
          <input
            type="text"
            id="vehiculo"
            placeholder="Tu auto (ej. Ford Ka 2018)"
            aria-label="Marca y modelo de tu auto"
            value={vehiculo}
            onChange={(e) => setVehiculo(e.target.value)}
          />
          <button className="clear" type="button" onClick={() => setSeleccion([])}>
            Vaciar
          </button>
          <a
            className="btn btn-wa"
            href={waLink(mensajeLista())}
            target="_blank"
            rel="noopener"
          >
            <WhatsappIcon />
            Consultar
          </a>
        </div>
      </div>

      {abierto && (
        <div className="modal">
          <div className="modal-bg" onClick={() => setAbierto(null)} />
          <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="mTitle">
            <button
              ref={cerrarRef}
              className="modal-x"
              type="button"
              aria-label="Cerrar"
              onClick={() => setAbierto(null)}
            >
              ×
            </button>
            <span className="ico">
              <ServicioIcon id={abierto.ico} />
            </span>
            <h3 id="mTitle">{abierto.nombre}</h3>
            <p className="m-desc">{abierto.desc}</p>
            <ul>
              {abierto.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="modal-foot">
              <span className="price">Consultar precio</span>
              <label className="add">
                <input
                  type="checkbox"
                  checked={seleccion.includes(abierto.id)}
                  onChange={(e) => alternar(abierto.id, e.target.checked)}
                />{" "}
                Agregar a mi consulta
              </label>
              <a
                className="btn btn-wa"
                href={waLink(
                  `Hola HIGHLINE! Quería consultar por: ${abierto.nombre}.${sufijoVehiculo(vehiculo)}`,
                )}
                target="_blank"
                rel="noopener"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
