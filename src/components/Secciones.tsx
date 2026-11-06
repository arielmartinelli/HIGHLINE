import { ClockIcon, PinIcon, WhatsappIcon } from "./Icons";
import { TEL_DISPLAY } from "@/data/servicios";
import { WA_GENERICO } from "@/lib/whatsapp";

const PASOS = [
  {
    num: "01",
    titulo: "Nos contás qué necesitás",
    texto:
      "Por WhatsApp, con la marca y el modelo del auto. Si tenés una foto del tablero o del equipo actual, mejor.",
  },
  {
    num: "02",
    titulo: "Te pasamos precio y turno",
    texto:
      "Presupuesto cerrado antes de empezar, con el tiempo que lleva el trabajo. Los sábados se reservan con seña.",
  },
  {
    num: "03",
    titulo: "Dejás el auto y lo retirás listo",
    texto:
      "Instalación prolija, cableado ordenado y prueba del equipo con vos antes de entregarlo.",
  },
];

const PREGUNTAS = [
  {
    q: "¿Atienden sin turno?",
    a: "De lunes a viernes conviene avisar antes para asegurarte el lugar. Los sábados se atiende solamente con turno reservado y seña previa.",
  },
  {
    q: "¿Cuánto sale cada trabajo?",
    a: "El precio depende del equipo que elijas y del modelo del auto. Mandanos la consulta con la marca y el modelo y te pasamos el presupuesto cerrado por WhatsApp.",
  },
  {
    q: "¿Cuánto tarda la instalación?",
    a: "La mayoría de los trabajos se entregan en el día. Cuando hay que pedir un equipo o el trabajo lleva más tiempo, te lo decimos al pasarte el presupuesto.",
  },
  {
    q: "¿Puedo llevar mi propio equipo?",
    a: "Sí, se puede instalar un equipo que ya tengas. Pasanos el modelo así confirmamos que sea compatible con tu auto y qué accesorios hacen falta.",
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="sec-alt">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2>Tres pasos y listo</h2>
        </div>
        <div className="steps">
          {PASOS.map((p) => (
            <article className="step" key={p.num}>
              <div className="num">{p.num}</div>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Horarios() {
  return (
    <section id="horarios">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Horarios y contacto</p>
          <h2>Cuándo y dónde</h2>
        </div>
        <div className="cols">
          <div className="panel">
            <h3>Nuestros horarios</h3>
            <ul className="hours">
              <li>
                <span className="d">Lunes a viernes</span>
                <span className="h">9:00 – 17:30</span>
              </li>
              <li>
                <span className="d">
                  Sábados<small>Atención con turno y seña previa</small>
                </span>
                <span className="h">9:00 – 13:00</span>
              </li>
              <li>
                <span className="d">Domingos</span>
                <span className="h cerrado">Cerrado</span>
              </li>
            </ul>
          </div>
          <div className="panel">
            <h3>Contacto</h3>
            <div className="contact-list">
              <div className="contact-row">
                <span className="ico">
                  <WhatsappIcon />
                </span>
                <span>
                  <span className="k">WhatsApp</span>
                  <br />
                  <span className="v">{TEL_DISPLAY}</span>
                </span>
              </div>
              <div className="contact-row">
                <span className="ico">
                  <PinIcon />
                </span>
                <span>
                  <span className="k">Zona</span>
                  <br />
                  <span className="v">Córdoba Capital</span>
                </span>
              </div>
              <div className="contact-row">
                <span className="ico">
                  <ClockIcon />
                </span>
                <span>
                  <span className="k">Turnos</span>
                  <br />
                  <span className="v">Se coordinan por WhatsApp</span>
                </span>
              </div>
            </div>
            <a
              className="btn btn-wa btn-block"
              href={WA_GENERICO}
              target="_blank"
              rel="noopener"
            >
              Escribir ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="sec-alt">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Antes de escribirnos</h2>
        </div>
        <div className="faq">
          {PREGUNTAS.map((p) => (
            <details key={p.q}>
              <summary>{p.q}</summary>
              <p>{p.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section>
      <div className="wrap">
        <div className="cta-final">
          <p className="eyebrow">Consultá sin compromiso</p>
          <h2>¿Arrancamos con tu auto?</h2>
          <p className="lead">
            Contanos qué necesitás y te respondemos con precio y turno.
          </p>
          <a
            className="btn btn-wa btn-lg"
            href={WA_GENERICO}
            target="_blank"
            rel="noopener"
          >
            <WhatsappIcon size={20} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-in">
        <div>
          <a className="logo logo-sm" href="#top">
            HIGH<span>LINE</span>
          </a>
          <p className="foot-claim">Expertos en servicio automotriz · Córdoba</p>
        </div>
        <p>
          WhatsApp {TEL_DISPLAY} · Lun a Vie 9 a 17:30 · Sáb 9 a 13
        </p>
      </div>
    </footer>
  );
}
