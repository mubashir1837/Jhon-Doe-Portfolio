"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="bg-gray-800 py-2">
        <ol className="flex flex-row gap-x-3 overflow-x-auto whitespace-nowrap  px-4 md:px-6 lg:px-8 xl:px-10 currsor-pointer">
          <li href="#" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            Home
          </li>
          <li href="#about" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            About
          </li>
          <li href="#contact" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            Contact
          </li>
          <li href="#servives" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            Services
          </li>
          <li href="#portfolio" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            Portfolio
          </li>
          <li href="#blog" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            Blog
          </li>
          <li href="#testimonials" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            Testimonials
          </li>
          <li href="#faq" className="text-white hover:text-blue-600 text-sm md:text-base py-2 px-3 md:px-4 transition-colors duration-200">
            FAQ
          </li>
        </ol>
      </nav>
      <section className="relative min-h-[90vh] bg-gray-900">
        <div className="container mx-auto grid h-full grid-cols-1 items-center gap-8 px-4 py-12 lg:grid-cols-2 lg:px-8 xl:px-12 2xl:px-16">
          {/* Text Content */}
          <div className="order-1 lg:order-1 lg:pr-8 xl:pr-12">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 md:mt-6 md:text-xl lg:max-w-[90%]">
              A passionate developer creating innovative web solutions with
              cutting-edge technology.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-12">
              <button className="transform rounded-lg bg-orange-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg md:text-base">
                Get Started
              </button>
              <button className="transform rounded-lg border border-gray-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-gray-400 hover:bg-gray-800 md:text-base">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-2 flex items-center justify-center lg:order-2">
            <div className="relative h-full w-full max-w-2xl">
              <Image
                src="/globe.svg"
                alt="John Doe - Developer"
                width={200}
                height={200}
                priority
                className="h-auto lg:w-[80%] w-full animate-float object-contain bg-orange-500 spin-slow rounded-full dark:bg-yellow-blue-900"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-gray-900 py-12 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end relative group animate-fade-in-left">
            <div className="relative w-full max-w-md h-96">
              <Image
                src="/Jhon.jpg" // Replace with your profile image
                alt="About Me"
                fill
                className="rounded-lg object-cover shadow-xl border-4 border-gray-700 group-hover:border-orange-600 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-orange-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-orange-600">Me</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6">
              Passionate developer with 5+ years of experience creating modern web applications.
              Specialized in full-stack development with focus on performance and user experience.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center bg-gray-900 px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  <span className="text-white text-sm">{skill}</span>
                </div>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="flex gap-8 mb-8">
              <div className="text-center">
                <div className="text-orange-600 text-2xl font-bold">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-orange-600 text-2xl font-bold">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2">
              <span>Download CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        <style jsx global>{`
    @keyframes fade-in-left {
      0% { opacity: 0; transform: translateX(-50px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    @keyframes fade-in-right {
      0% { opacity: 0; transform: translateX(50px); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .animate-fade-in-left {
      animation: fade-in-left 1s ease-out forwards;
    }
    .animate-fade-in-right {
      animation: fade-in-right 1s ease-out forwards;
    }
  `}</style>
      </section>

{/* Services Section */}
<section id="services" className="bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      My <span className="text-orange-600">Services</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((service) => (
        <div 
          key={service}
          className="bg-gray-900 p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
        >
          <div className="w-12 h-12 bg-orange-600 rounded-full mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Portfolio Section */}
<section id="portfolio" className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      My <span className="text-orange-600">Portfolio</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((project) => (
        <div key={project} className="group relative overflow-hidden rounded-lg">
          <Image
            src="/project2.jpg"
            alt="Project"
            width={600}
            height={400}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-2">Project Title</h3>
            <p className="text-gray-300 mb-4">Web Development</p>
            <button className="self-start px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Blog Section */}
<section id="blog" className="bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      Latest <span className="text-orange-600">Blog</span> Posts
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((post) => (
        <article key={post} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          <Image
            src="/project1.jpg"
            alt="Blog Post"
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-400 mb-3">
              <span>Mar 15, 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">The Future of Web Development</h3>
            <p className="text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <a href="#" className="text-oramge-600 hover:text-orange-500 flex items-center">
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section id="testimonials" className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      Client <span className="text-orange-600">Testimonials</span>
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((testimonial) => (
        <div key={testimonial} className="bg-gray-800 p-6 rounded-lg relative">
          <div className="text-orange-600 text-5xl absolute top-4 right-4 opacity-25">"</div>
          <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
            <div>
              <h4 className="text-white font-semibold">John Smith</h4>
              <p className="text-gray-400 text-sm">CEO, Tech Corp</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* FAQ Section */}
<section id="faq" className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
      Frequently Asked <span className="text-orange-600">Questions</span>
    </h2>
    
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((faq) => (
        <details 
          key={faq} 
          className="group bg-gray-900 rounded-lg p-4 hover:bg-gray-850 transition-colors"
        >
          <summary className="flex justify-between items-center cursor-pointer text-white">
            <span className="font-semibold">How long does a project typically take?</span>
            <svg className="w-6 h-6 transform group-open:rotate-180 transition-transform">
              <path stroke="currentColor" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-400">
            Project timelines vary depending on complexity, but most projects take between 4-8 weeks from initial consultation to final delivery.
          </p>
        </details>
      ))}
    </div>
  </div>
</section>

{/* Footer Section */}
<footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* About Column */}
    <div className="space-y-4">
      <h3 className="text-orange-500 text-xl font-bold">John Doe</h3>
      <p className="text-sm">Passionate developer creating innovative web solutions</p>
      <div className="flex space-x-4">
        <a href="https://github.com/mubashir1837" className="text-gray-400 hover:text-orange-500 transition-colors">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        {/* Add other social icons */}
      </div>
    </div>

    {/* Quick Links */}
    <div className="space-y-4">
      <h4 className="text-orange-500 font-semibold">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-orange-500 transition-colors">About</a></li>
        <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
        <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portfolio</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="space-y-4">
      <h4 className="text-orange-500 font-semibold">Contact</h4>
      <p className="text-sm">Email: john@example.com</p>
      <p className="text-sm">Phone: +1 234 567 890</p>
    </div>

    {/* Newsletter */}
    <div className="space-y-4">
      <h4 className="text-orange-500 font-semibold">Newsletter</h4>
      <form className="flex flex-col space-y-3">
        <input 
          type="email" 
          placeholder="Enter your email"
          className="bg-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button 
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  {/* Copyright */}
  <div className="border-t border-gray-800 mt-12 pt-8 text-center">
    <p className="text-sm text-gray-500">
      © 2024 John Doe. All rights reserved.
    </p>
  </div>
</footer>


    </main>
  );
}
