import checked from "../assets/img/controlar.svg"
import first from "../assets/img/first-web-hosting.svg"
import second from "../assets/img/second-web-hosting.svg"
import fast from "../assets/img/fast-web-server.svg"

export const ThirdData = [
  {
    id: 1,
    img: first,
    title: "Básico",
    price: "u$ 4.99 / Mensual",
    icon: checked,
    caracteristicas: {
      web: 1,
      mail: 3,
      subDomain: "Ilimitado",
      almacenamiento: "5Gb",
    },
  },

  {
    id: 2,
    img: second,
    title: "Intermedio",
    price: "u$ 9.99 / Mensual",
    icon: checked,
    caracteristicas: {
      web: 3,
      mail: 5,
      subDomain: "Ilimitado",
      almacenamiento: "10Gb",
    },
  },

  {
    id: 3,
    img: fast,
    title: "premium",
    price: "u$ 14.99 / Mensual",
    icon: checked,
    caracteristicas: {
      web: 5,
      mail: 7,
      subDomain: "Ilimitado",
      almacenamiento: "15Gb",
    },
  },
]
