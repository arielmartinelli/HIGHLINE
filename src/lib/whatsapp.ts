import { TEL } from "@/data/servicios";

/** Arma el link de WhatsApp con el mensaje ya escrito. */
export function waLink(texto: string): string {
  return `https://wa.me/${TEL}?text=${encodeURIComponent(texto)}`;
}

export const MENSAJE_GENERICO =
  "Hola HIGHLINE! Quería hacer una consulta por un trabajo en mi auto.";

export const WA_GENERICO = waLink(MENSAJE_GENERICO);

/** Sufijo con el auto que escribió la persona, si lo completó. */
export function sufijoVehiculo(vehiculo: string): string {
  const v = vehiculo.trim();
  return v ? `\n\nMi auto: ${v}` : "";
}
