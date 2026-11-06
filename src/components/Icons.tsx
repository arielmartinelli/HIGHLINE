import type { IconoId } from "@/data/servicios";

export function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.1c-.25.69-1.44 1.32-1.99 1.37-.53.05-1.02.24-3.44-.72-2.9-1.14-4.74-4.1-4.88-4.29-.14-.19-1.17-1.55-1.17-2.96s.74-2.1 1-2.39c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.16.29.73 1.2 1.56 1.94 1.07.96 1.98 1.25 2.26 1.39.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.64-.14.26.09 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.69-.17 1.39z" />
    </svg>
  );
}

const TRAZO = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
} as const;

export function ServicioIcon({ id, size = 22 }: { id: IconoId; size?: number }) {
  const base = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const };

  switch (id) {
    case "audio":
      return (
        <svg {...base} {...TRAZO} strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v2.4M12 18.6V21" />
        </svg>
      );
    case "pantalla":
      return (
        <svg {...base} {...TRAZO} strokeLinejoin="round">
          <rect x="2.5" y="4" width="19" height="13" rx="2" />
          <path d="M8 20.5h8M12 17v3.5" />
        </svg>
      );
    case "alarma":
      return (
        <svg {...base} {...TRAZO} strokeLinejoin="round">
          <path d="M12 2.8 20 6v5.6c0 4.6-3.3 8.1-8 9.6-4.7-1.5-8-5-8-9.6V6z" />
          <path d="M9.3 12.2l1.9 1.9 3.6-3.8" />
        </svg>
      );
    case "llave":
      return (
        <svg {...base} {...TRAZO} strokeLinecap="round">
          <circle cx="8" cy="8.5" r="4.3" />
          <path d="M11.2 11.6 20 20.4M16.6 17l-2 2M18.8 19.2l-1.6 1.6" />
        </svg>
      );
    case "cerradura":
      return (
        <svg {...base} {...TRAZO} strokeLinejoin="round">
          <rect x="4" y="10.3" width="16" height="10.5" rx="2" />
          <path d="M7.8 10.3V7.4a4.2 4.2 0 0 1 8.4 0v2.9" />
        </svg>
      );
    case "polarizado":
      return (
        <svg {...base} {...TRAZO} strokeLinejoin="round">
          <path d="M3.2 15.5 6 7.6a2 2 0 0 1 1.9-1.4h8.2A2 2 0 0 1 18 7.6l2.8 7.9" />
          <path d="M3.2 15.5h17.6M12 6.2v9.3" />
        </svg>
      );
    case "sensor":
      return (
        <svg {...base} {...TRAZO} strokeLinecap="round">
          <path d="M4.5 16.5a10.6 10.6 0 0 1 15 0" />
          <path d="M8 20a5.8 5.8 0 0 1 8 0" />
          <circle cx="12" cy="7" r="1.6" />
        </svg>
      );
    case "bateria":
      return (
        <svg {...base} {...TRAZO} strokeLinejoin="round">
          <rect x="2.5" y="8" width="19" height="10.5" rx="2" />
          <path d="M6.5 8V5.8h3V8M14.5 8V5.8h3V8M8.5 13.2h3M14 13.2h3M15.5 11.7v3" />
        </svg>
      );
    case "cristal":
      return (
        <svg {...base} {...TRAZO} strokeLinejoin="round">
          <path d="M2.8 17 5.4 8.3A2.4 2.4 0 0 1 7.7 6.6h8.6a2.4 2.4 0 0 1 2.3 1.7L21.2 17" />
          <path d="M2.8 17h18.4" />
          <path d="m9.4 6.8 2.2 10.2" />
        </svg>
      );
  }
}

export function PinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...TRAZO} aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...TRAZO} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
