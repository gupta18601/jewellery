export default function AboutUs() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-6">
            Shree Radha Govind Jewellers is a leading manufacturer, exporter,
            and importer of precious and semi-precious stones and studded
            jewellery. With decades of experience in the industry, we pride
            ourselves on our exquisite craftsmanship and attention to detail.
          </p>
          <p className="text-gray-700">
            Our team of skilled artisans combines traditional techniques with
            modern technology to create stunning pieces that captivate and
            inspire. From elegant engagement rings to statement necklaces, each
            piece is a work of art designed to last a lifetime.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            To be the worlds most trusted and innovative jewelry brand, setting
            new standards in craftsmanship, design, and ethical practices in the
            global jewelry industry.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Creating timeless pieces that celebrate lifes precious moments
            </li>
            <li>
              Leading innovation in sustainable and ethical jewelry practices
            </li>
            <li>Inspiring the next generation of artisans and designers</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To create exceptional jewelry that combines traditional
            craftsmanship with contemporary design while maintaining the highest
            standards of ethical sourcing and sustainable practices.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              Sourcing the finest precious and semi-precious stones from ethical
              suppliers
            </li>
            <li>
              Employing and training skilled artisans to preserve traditional
              craftsmanship
            </li>
            <li>Providing transparent and educational customer experiences</li>
            <li>Supporting communities involved in the jewelry supply chain</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
