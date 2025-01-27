import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Diamond Ring",
    image: "/diamond.jpg?height=600&width=600",
    price: 1999.99,
    description:
      "Elegant diamond ring with a brilliant cut stone set in 18k white gold.",
    details: [
      "Center stone: 1 carat brilliant cut diamond",
      "Clarity: VS1",
      "Color: F",
      "Setting: 18k white gold",
      "Band width: 2mm",
    ],
  },
  {
    id: 2,
    name: "Sapphire Necklace",
    image: "/sapphire.jpg?height=600&width=600",
    price: 1499.99,
    description:
      "Stunning sapphire pendant necklace featuring a deep blue gemstone surrounded by diamonds.",
    details: [
      "Center stone: 2 carat oval cut sapphire",
      "Accent stones: 0.5 carat total weight diamonds",
      "Chain: 18 inches, 18k white gold",
      "Pendant size: 15mm x 10mm",
    ],
  },
  {
    id: 3,
    name: "Ruby Earrings",
    image: "/ruby.jpg?height=600&width=600",
    price: 1299.99,
    description:
      "Exquisite ruby earrings with a classic drop design, perfect for any occasion.",
    details: [
      "Gemstones: 2 carat total weight rubies",
      "Cut: Pear shape",
      "Setting: 14k yellow gold",
      "Earring length: 1 inch",
      "Closure: Secure lever back",
    ],
  },
  {
    id: 4,
    name: "Emerald Bracelet",
    image: "/emerald.jpg?height=600&width=600",
    price: 1799.99,
    description:
      "Luxurious emerald bracelet featuring vibrant green stones set in 18k yellow gold.",
    details: [
      "Gemstones: 3 carat total weight emeralds",
      "Cut: Oval",
      "Metal: 18k yellow gold",
      "Length: 7 inches",
      "Closure: Box clasp with safety",
    ],
  },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number.parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <Link
        href="/#products"
        className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
      >
        &larr; Back to Products
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            style={{ height: "auto", width: "auto" }}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Product Details:
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {product.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
