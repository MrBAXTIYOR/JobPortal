import React from 'react';
import { Send } from 'lucide-react';
import Container from '../../container/Container';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <Container>
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-semibold text-gray-900">About us</h1>
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">About us</span>
            </nav>
          </div>
        </Container>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-blue-600">Who we are</h2>
              <h3 className="text-3xl font-bold text-gray-900">
                We care about
                <br />
                customer services
              </h3>
            </div>
            <p className="text-gray-600">
              Want to chat? We'd love to hear from you! Get in touch with our
              Customer Success Team to inquire about speaking events,
              advertising rates, or just say hello.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded hover:bg-blue-700 transition duration-200">
              Email Support
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subjects"
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded flex items-center justify-center space-x-2 hover:bg-blue-700 transition duration-200"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564749296!5m2!1sen!2s"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 bg-gray-800 rounded text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold">1,75,324</div>
                <div className="text-gray-400 mt-1">Live Job</div>
              </div>
              <div>
                <div className="text-2xl font-bold">97,354</div>
                <div className="text-gray-400 mt-1">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold">38,47,154</div>
                <div className="text-gray-400 mt-1">Candidates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
