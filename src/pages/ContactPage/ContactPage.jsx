import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate API or service to send form data
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Get in touch with us!</h2>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:contact@sumaterasutra.com" className="text-blue-600 hover:underline">
                contact@sumaterasutra.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Telepon:</strong>{' '}
              <a href="tel:+62123456789" className="text-blue-600 hover:underline">
                +62-812-3456-7890
              </a>
            </p>
            <p>
              <strong>Alamat:</strong> Jl. Merdeka No. 123, Sumatera Selatan, Indonesia
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nama
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
              />
            </div>

            <button
              type="submit"
              className="inline-block bg-blue-600 text-white font-medium rounded-lg px-6 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
