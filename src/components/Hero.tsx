import Image from "next/image";
import { WhatsappIcon } from "./Icons";
import { WA_GENERICO } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/hero-interior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-in">
          <p className="eyebrow">Córdoba · Servicio automotriz</p>
          <h1>
            Sonido, seguridad y confort
            <br />
            <em>para tu auto</em>
          </h1>
          <p className="lead">
            Car audio, alarmas, cierres centralizados, polarizados y multimedia. Trabajo
            prolijo, con turno, y presupuesto por WhatsApp antes de tocar el auto.
          </p>
          <div className="hero-cta">
            <a
              className="btn btn-wa btn-lg"
              href={WA_GENERICO}
              target="_blank"
              rel="noopener"
            >
              <WhatsappIcon size={20} />
              Pedir presupuesto
            </a>
            <a className="btn btn-ghost btn-lg" href="#servicios">
              Ver lo que hacemos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
