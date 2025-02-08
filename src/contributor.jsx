      import {
  FaUserTie,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
      import sudip from "./assets/sudip.jpeg";
      import mentor from "./assets/tothagoto.jpeg";
      import sir from "./assets/sir.jpg";
      import pappu from "./assets/pappu.jpg";

      
      {/* Contributors Section */}
      <section
        id="contributors"
        className="bg-gradient-to-r from-teal-900 to-teal-900 py-16"
      >
        <div className="container mx-auto px-6 mt-16">
          <h3 className="text-4xl font-extrabold text-white mb-12 text-center flex items-center justify-center">
            <FaUsers className="mr-3 text-white" />
            Our Team
          </h3>

          {/* Grid Layout for Contributors, Mentor, and Advisor */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center">
            {/* Contributor Cards */}
            {[
              {
                name: "Sudip Chakrabarty",
                email: "sudipchakrabarty6@gmail.com",
                img: sudip,
                github: "https://github.com/Sudip-329",
                linkedin: "https://www.linkedin.com/in/sudipchakrabarty329",
              },
              {
                name: "Pappu Bishwas",
                email: "pappuovi8@gmail.com",
                img: pappu,
                github: "https://github.com/pappubishwas",
                linkedin: "https://www.linkedin.com/in/pappu-bishwas-tan87/",
              },
            ].map((contributor, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-3xl p-4 max-w-xs w-full flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-teal-300 h-full"
              >
                {index < 2 && (
                  <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Our Contributor
                  </span>
                )}
                <img
                  src={contributor.img}
                  alt={contributor.name}
                  className="w-32 h-32 rounded-full border-4 border-teal-400 mb-4 shadow-md object-cover"
                />
                <h4 className="text-xl font-bold text-gray-800">
                  {contributor.name}
                </h4>
                <p className="text-sm text-gray-600">
                  School of Computer Engineering, KIIT Bhubaneswar
                </p>

                <div className="flex space-x-3 mt-4">
                  <a
                    href={`mailto:${contributor.email}`}
                    className="w-8 h-8 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full text-sm hover:bg-teal-200 transition-all"
                    title="Send Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={contributor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-all"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full text-sm hover:bg-teal-200 transition-all"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            ))}

            {/* Mentor Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-2xl p-6 max-w-xs flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center">
                <FaUserTie className="mr-2 text-yellow-400" />
                Our Mentor
              </h3>
              <img
                src={mentor}
                alt="Dr. Rajdeep Chatterjee"
                className="w-32 h-32 rounded-full border-4 border-yellow-400 mb-3 shadow-lg"
              />
              <h4 className="text-lg text-black font-bold">
                {" "}
                Tathagata Bandyopadhyay
              </h4>
              <p className="text-black text-xs text-center">
                Visual Computing Lab, Technical University of Munich, Germany
              </p>
              <div className="flex space-x-3 mt-3">
                <a
                  href="https://sites.google.com/kiit.ac.in/rajdeep/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-lg text-yellow-600 hover:text-white transition duration-200" />
                </a>
                <a
                  href="https://github.com/cserajdeep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg text-yellow-600 hover:text-white transition duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajdeep-chatterjee-ph-d-60352325"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-lg text-yellow-600 hover:text-yellow-300 transition duration-200" />
                </a>
              </div>
            </div>

            {/* Advisor Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-2xl p-6 max-w-xs flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
              <h3 className="text-xl font-semibold text-purple-400 mb-3 flex items-center">
                <FaUserTie className="mr-2 text-purple-400" />
                Our Advisor
              </h3>
              <img
                src={sir}
                alt="Advisor Image"
                className="w-32 h-32 rounded-full border-4 border-purple-400 mb-3 shadow-lg"
              />
              <h4 className="text-lg text-black font-bold">
                Dr. Rajdeep Chatterjee
              </h4>
              <p className="text-black text-xs text-center">
                Associate Professor,School of Computer Engineering, KIIT
                Bhubaneswar
              </p>
              <div className="flex space-x-3 mt-3">
                <a
                  href="https://sites.google.com/kiit.ac.in/rajdeep/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-lg text-purple-600 hover:text-white transition duration-200" />
                </a>
                <a
                  href="https://github.com/cserajdeep"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg text-purple-600 hover:text-white transition duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rajdeep-chatterjee-ph-d-60352325"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-lg text-purple-600 hover:text-purple-300 transition duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>