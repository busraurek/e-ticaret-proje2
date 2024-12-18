export const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Yeni Gelenler",
    href: "/shop/new-arrivals",
    description: "Son moda kıyafetler ve en yeni koleksiyonlarımızı keşfedin.",
  },
  {
    title: "Kampanyalar",
    href: "/shop/sale",
    description: "Kaçırılmayacak indirim fırsatlarını ve özel kampanyaları görün.",
  },
  {
    title: "Beden Rehberi",
    href: "/shop/size-guide",
    description: "Kıyafet seçiminde size en uygun bedeni bulmanız için rehber.",
  },
  {
    title: "Koleksiyonlar",
    href: "/shop/collections",
    description: "Sezonun öne çıkan temalarına göre hazırlanmış özel koleksiyonlarımız.",
  },
  {
    title: "Erkek Giyim",
    href: "/shop/men",
    description: "Erkekler için şık ve rahat kıyafet seçenekleri burada.",
  },
  {
    title: "Kadın Giyim",
    href: "/shop/women",
    description: "Kadınlar için modern ve zarif kıyafetlerimizi keşfedin.",
  },
];

export interface SssType {
  id: string;
  title: string;
  description: string;
}

export const sssList: SssType[] = [
  {
    id: "item-1",
    title: "Title-1 sss",
    description: "Kadınlar için modern ve zarif kıyafetlerimizi keşfedin.",
  },
  {
    id: "item-2",
    title: "Title-2 sss",
    description: "Kadınlar için modern ve zarif kıyafetlerimizi keşfedin.",
  },
  {
    id: "item-3",
    title: "Title-3 sss",
    description: "Kadınlar için modern ve zarif kıyafetlerimizi keşfedin.",
  },
];

export interface CarouselType {
  id: number;
  image: string;
}

export const CarouselList: CarouselType[] = [
  {
    id: 1,
    image: "/slider/5.jpg",
  },
  {
    id: 2,
    image: "/slider/6.jpg",
  },
  {
    id: 3,
    image: "/slider/7.jpg",
  },
];

export interface ProductType {
  id: number;
  title: string;
  price: number;
  mrp: number;
  description: string;
  image: string;
}

export const products: ProductType[] = [
  {
    id: 1,
    title: "Product One",
    price: 100,
    mrp: 100,
    description: "Description for product one",
    image: "/products/1.jpg",
  },
  {
    id: 2,
    title: "Product two",
    price: 100,
    mrp: 100,
    description: "Description for product two",
    image: "/products/2.jpg",
  },
  {
    id: 3,
    title: "Product three",
    price: 100,
    mrp: 100,
    description: "Description for product three",
    image: "/products/3.jpg",
  },
  {
    id: 4,
    title: "Product Four",
    price: 100,
    mrp: 100,
    description: "Description for product Four",
    image: "/products/4.jpg",
  },
  {
    id: 5,
    title: "Product Five",
    price: 100,
    mrp: 100,
    description: "Description for product Five",
    image: "/products/5.jpg",
  },
  {
    id: 6,
    title: "Product Six",
    price: 100,
    mrp: 100,
    description: "Description for product Six",
    image: "/products/6.jpg",
  },
  {
    id: 7,
    title: "Product Seven",
    price: 100,
    mrp: 100,
    description: "Description for product Seven",
    image: "/products/7.jpg",
  },
  {
    id: 8,
    title: "Product Eight",
    price: 100,
    mrp: 100,
    description: "Description for product Eight",
    image: "/products/8.jpg",
  },
  {
    id: 9,
    title: "Product Nine",
    price: 100,
    mrp: 100,
    description: "Description for product Nine",
    image: "/products/9.jpg",
  },
  {
    id: 10,
    title: "Product Ten",
    price: 100,
    mrp: 100,
    description: "Description for product Ten",
    image: "/products/10.jpg",
  },
  {
    id: 11,
    title: "Product Eleven",
    price: 100,
    mrp: 100,
    description: "Description for product Eleven",
    image: "/products/11.jpg",
  },
  {
    id: 12,
    title: "Product Twelve",
    price: 100,
    mrp: 100,
    description: "Description for product Twelve",
    image: "/products/12.jpg",
  },
];
