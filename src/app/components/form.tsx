const ContactForm = () => {
    return (
      <section className="min-h-screen flex justify-center items-center py-6">
        <div className="bg-blue-300 shadow-lg rounded-lg p-8 max-w-md w-full">
          <h1 className="md:text-3xl font-semibold mb-2 text-center">Contact Us</h1>
          <p className="text-xs md:text-sm mb-6 text-center">Contact us today for inquiries or to request a quote.</p>
          <form action="#" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input id="name" type="text" name="name" placeholder="Your Name"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input id="email" type="email" name="email" placeholder="Your Email"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="4"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Your Message"></textarea>
            </div>
            <button type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Send
              Message</button>
          </form>
        </div>
      </section>
    );
  };
  export default ContactForm