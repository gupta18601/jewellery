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
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Exquisite Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
