export type Rubro = "sonido" | "seguridad" | "confort" | "service";

export type IconoId =
  | "audio"
  | "pantalla"
  | "alarma"
  | "llave"
  | "cerradura"
  | "polarizado"
  | "sensor"
  | "bateria"
  | "cristal";

export interface Servicio {
  id: string;
  cat: Rubro;
  ico: IconoId;
  nombre: string;
  sub: string;
  desc: string;
  items: string[];
  destacado?: boolean;
}

export const TEL = "5493516967341";
export const TEL_DISPLAY = "351 696-7341";

export const FILTROS: { id: Rubro | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "sonido", label: "Sonido y multimedia" },
  { id: "seguridad", label: "Seguridad" },
  { id: "confort", label: "Confort" },
  { id: "service", label: "Service" },
];

export const SERVICIOS: Servicio[] = [
  {
    id: "car-audio",
    cat: "sonido",
    ico: "audio",
    nombre: "Car Audio",
    destacado: true,
    sub: "Stereo, parlantes, potencia y subwoofer.",
    desc: "Armamos el sistema de sonido completo de tu auto y lo dejamos ajustado. Podés arrancar por lo básico, cambiar los parlantes y el stereo, o ir por un equipo con potencia y subwoofer.",
    items: [
      "Stereos, parlantes y tweeters",
      "Potencias y subwoofers",
      "Cableado, fusibles y aislación de puertas",
      "Ajuste de ecualización con el auto en mano",
    ],
  },
  {
    id: "pantallas",
    cat: "sonido",
    ico: "pantalla",
    nombre: "Pantallas Android",
    sub: "Multimedia con GPS y espejado del celular.",
    desc: "Una pantalla Android reemplaza el stereo original y te suma GPS, música desde el celular, llamadas por Bluetooth y cámara de retroceso. Se coloca con el marco a medida del tablero, sin cortes ni huecos.",
    items: [
      "Pantallas 1 DIN y 2 DIN",
      "Android Auto y Apple CarPlay",
      "Cámara de retroceso integrada",
      "Adaptador para los comandos del volante",
    ],
  },
  {
    id: "alarmas",
    cat: "seguridad",
    ico: "alarma",
    nombre: "Alarmas",
    destacado: true,
    sub: "Instalación, reparación y actualización.",
    desc: "Instalamos alarmas para autos y camionetas, y también reparamos o actualizamos la que ya tenés. Se configura con vos para que quede como la querés usar todos los días.",
    items: [
      "Alarmas con control remoto",
      "Sensores de presencia dentro del auto",
      "Corte de corriente",
      "Reparación de equipos ya instalados",
    ],
  },
  {
    id: "cierres",
    cat: "seguridad",
    ico: "cerradura",
    nombre: "Cierres centralizados",
    sub: "Todas las puertas desde un solo control.",
    desc: "Cerrás y abrís todas las puertas desde el control remoto o desde la llave original, sin tener que trabar una por una. Se puede instalar solo o combinado con la alarma.",
    items: [
      "Kit para 2 y 4 puertas",
      "Comando a distancia",
      "Integración con la alarma",
      "Apertura de baúl a distancia",
    ],
  },
  {
    id: "cerrajeria",
    cat: "seguridad",
    ico: "llave",
    nombre: "Cerrajería del automotor",
    sub: "Llaves, carcasas y controles.",
    desc: "Hacemos duplicados de llaves, cambiamos carcasas gastadas y codificamos llaves con chip para que arranquen tu auto. También abrimos puertas cuando quedaron las llaves adentro.",
    items: [
      "Duplicado de llaves",
      "Llaves con chip y codificación",
      "Carcasas y controles nuevos",
      "Apertura de puertas",
    ],
  },
  {
    id: "polarizados",
    cat: "confort",
    ico: "polarizado",
    nombre: "Polarizados",
    sub: "Láminas colocadas sin burbujas.",
    desc: "Colocamos láminas en los tonos permitidos para circular. Bajan el calor adentro del auto, cuidan la tapicería del sol y suman privacidad. Se cortan a medida de cada vidrio.",
    items: [
      "Tonos claros y oscuros",
      "Lámina de seguridad",
      "Colocación en el día",
      "Garantía de colocación",
    ],
  },
  {
    id: "sensores",
    cat: "confort",
    ico: "sensor",
    nombre: "Sensores de estacionamiento",
    sub: "Aviso al retroceder o estacionar.",
    desc: "Los sensores te avisan a qué distancia está el obstáculo cuando estacionás. Se pueden poner atrás, adelante, o en los dos lados, con aviso sonoro o con un display en el tablero.",
    items: [
      "Sensores traseros",
      "Sensores delanteros",
      "Display o aviso sonoro",
      "Combinables con cámara de retroceso",
    ],
  },
  {
    id: "baterias",
    cat: "service",
    ico: "bateria",
    nombre: "Baterías",
    sub: "Venta, colocación y prueba de carga.",
    desc: "Vendemos y colocamos la batería que corresponde a tu auto, en el momento. Antes probamos la carga y revisamos el alternador, para que no te vuelva a pasar a los pocos meses.",
    items: [
      "Venta de baterías",
      "Colocación inmediata",
      "Test de carga",
      "Revisión del alternador",
    ],
  },
  {
    id: "cristales",
    cat: "service",
    ico: "cristal",
    nombre: "Parabrisas y cristales",
    sub: "Reemplazo de vidrios y sellado.",
    desc: "Cambiamos parabrisas, lunetas y vidrios laterales rotos o rayados, con sellado prolijo para que no entre agua ni ruido.",
    items: ["Parabrisas", "Lunetas", "Vidrios laterales", "Burletes y sellado"],
  },
];
