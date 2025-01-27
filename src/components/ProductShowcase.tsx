import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Diamond Ring",
    image: "/diamond.jpg?height=300&width=300",
    price: 1999.99,
    description:
      "Elegant diamond ring with a brilliant cut stone set in 18k white gold.",
  },
  {
    id: 2,
    name: "Sapphire Necklace",
    image: "/sapphire.jpg?height=300&width=300",
    price: 1499.99,
    description:
      "Stunning sapphire pendant necklace featuring a deep blue gemstone surrounded by diamonds.",
  },
  {
    id: 3,
    name: "Ruby Earrings",
    image: "/ruby.jpg?height=300&width=300",
    price: 1299.99,
    description:
      "Exquisite ruby earrings with a classic drop design, perfect for any occasion.",
  },
  {
    id: 4,
    name: "Emerald Bracelet",
    image: "/emerald.jpg?height=300&width=300",
    price: 1799.99,
    description:
      "Luxurious emerald bracelet featuring vibrant green stones set in 18k yellow gold.",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Exquisite Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
