import rendang from "../assets/rendang.avif"
import nasiGoreng from "../assets/nasi-goreng.avif"
import pempek from "../assets/pempek.webp"
import sateMadura from "../assets/nasi-madura.avif"
import ayamBetutu from "../assets/ayam-betutu.webp"
import baksoMalang from "../assets/bakso-malang.webp"
import gudeg from "../assets/gudeg.webp"
import gadoGado from "../assets/gado-gado.jpeg"

const products = [
  {
    id: 1,
    name: "Rendang",
    price: 50000,
    img: rendang,
    description: "Daging sapi kaya rempah yang dimasak lama dengan santan."
  },
  {
    id: 2,
    name: "Nasi Goreng",
    price: 25000,
    img: nasiGoreng,
    description: "Nasi tumis kecap dengan telur dan suwiran ayam gurih."
  },
  {
    id: 3,
    name: "Pempek",
    price: 30000,
    img: pempek,
    description: "Olahan ikan tenggiri kenyal dengan kuah cuko asam pedas."
  },
  {
    id: 4,
    name: "Sate Madura",
    price: 28000,
    img: sateMadura,
    description: "Sate ayam bakar bumbu kecap dengan siraman saus kacang."
  },
  {
    id: 5,
    name: "Ayam Betutu",
    price: 95000,
    img: ayamBetutu,
    description: "Ayam utuh berbumbu base genep khas Bali yang pedas gurih."
  },
  {
    id: 6,
    name: "Bakso Malang",
    price: 20000,
    img: baksoMalang,
    description: "Bakso komplit dengan pangsit dan tahu dalam kuah bening."
  },
  {
    id: 7,
    name: "Gudeg",
    price: 35000,
    img: gudeg,
    description: "Nangka muda masak santan dan gula aren khas Yogyakarta."
  },
  {
    id: 8,
    name: "Gado-gado",
    price: 22000,
    img: gadoGado,
    description: "Salad sayur rebus dengan siraman saus kacang kental."
  }
];

export default products;