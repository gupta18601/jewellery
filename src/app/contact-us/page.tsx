import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="min-h-screen">
      <main>
        <ContactForm />
      </main>
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-4xl px-4 pb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d664.0884490519786!2d75.82800366445672!3d26.921926588961032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b54b1f5c4f%3A0xfc80e3b73b58f75b!2sRadha%20Govind%20Complex%2C%20Johari%20Bazar%2C%20Mani%20Ram%20Ji%20Ki%20Kothi%20Ka%20Rasta%2C%20Dara%20Market%2C%20Ramganj%20Bazar%2C%20Jaipur%2C%20Rajasthan%20302002!5e0!3m2!1sen!2sin!4v1737638454650!5m2!1sen!2sin"
            className="w-full h-64 sm:h-80 lg:h-96 border-0 rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
