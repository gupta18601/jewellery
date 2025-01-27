import { CheckCircle } from "lucide-react"

const reasons = [
  "Premium quality stones and materials",
  "Expert craftsmanship",
  "Custom design services",
  "Ethical sourcing practices",
  "Competitive pricing",
  "Excellent customer service",
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-green-500 mr-4" />
              <span className="text-gray-700">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

