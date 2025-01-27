export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Shree Radha Govind Jewellers
            </h3>
            <p className="text-gray-400">
              Exquisite jewellery for every occasion
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">
              F-50, Radha Govind Complex, Ramganj Bazar, Jaipur
            </p>
            <p className="text-gray-400">Phone: +91-9828014998</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Shree Radha Govind Jewellers. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
