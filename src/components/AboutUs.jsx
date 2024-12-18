import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        About Us
      </h1>

      <div className="space-y-6 text-gray-800">
        {/* Mission Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Our Mission
          </h2>
          <p className="leading-relaxed">
            At <strong>FreshGreens</strong>, our mission is to bring fresh,
            organic, and affordable vegetables directly to your doorstep. We aim
            to support local farmers, eliminate middlemen, and promote
            sustainable agriculture to ensure the highest quality produce for
            our customers.
          </p>
        </section>

        {/* Vision Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Our Vision
          </h2>
          <p className="leading-relaxed">
            We envision a world where everyone has access to nutritious and
            sustainable food. By connecting consumers with local farmers, we
            hope to create a fair and transparent market that benefits both
            producers and buyers.
          </p>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Our Values
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Freshness:</strong> Delivering the freshest produce to
              your table.
            </li>
            <li>
              <strong>Quality:</strong> Ensuring the best standards in every
              product we sell.
            </li>
            <li>
              <strong>Sustainability:</strong> Supporting eco-friendly farming
              practices.
            </li>
            <li>
              <strong>Community:</strong> Empowering local farmers and creating
              a healthy community.
            </li>
          </ul>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">
            Meet Our Team
          </h2>
          <p className="leading-relaxed">
            We are a team of passionate individuals committed to making healthy
            and organic food accessible to all. With backgrounds in agriculture,
            technology, and business, we bring a unique blend of expertise to
            ensure the success of our mission.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-8">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            Join Us in Building a Healthier Future!
          </h3>
          <p className="text-gray-700 mb-6">
            Explore our fresh produce, subscribe to our service, and be part of
            the sustainable food movement.
          </p>
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-md shadow-md font-medium"
          >
            Browse Our Products
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
