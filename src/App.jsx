import { Link } from "react-scroll";
import { motion } from "framer-motion";

import {
  FaExternalLinkAlt,
  FaDownload,
  FaUserTie,
  FaEnvelope,
  FaLinkedin,
  FaLink,
  FaGithub,
  FaCheckCircle,
  FaExclamationCircle,
  FaDatabase,
  FaUsers,
  FaChartPie,
  FaShieldAlt,
  FaTools,
  FaClock,
  FaPenFancy,
  FaListOl,
  FaGlobe,
  FaStar,
  FaCut,
} from "react-icons/fa";
import img1 from "./assets/bgimg.jpg";
import { SiMega } from "react-icons/si";
import { GiInspiration } from "react-icons/gi";
import { DiGoogleDrive } from "react-icons/di";

import sudip from "./assets/sudip.jpeg";
import mentor from "./assets/tothagoto.jpeg";
import pic from "./assets/pic.jpg";
import sir from "./assets/sir.jpg";
import pappu from "./assets/pappu.jpg";

const class_names = [
  "Tanpura",
  "Traditional Song",
  "Railway Engine",
  "Children class noise",
  "Harmonium",
  "Dhak",
  "Tabla",
  "Azan",
  "Church Prayer",
  "Irrigation Engine",
  "Ektara",
  "Launch Engine",
  "Flute",
  "Bhuddist Prayer",
  "Fish market",
  "Tiger",
  "Elephant",
  "Kalboishakhi Storm",
  "Sanatan Religion Aroti",
  "Rickshaw Horn",
  "Afganisthan Pashto Music",
];

const App = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 font-sans">
      {/* Outer Container with Background Image */}
      <div className="relative bg-cover bg-center">
        {/* Navbar */}
        <nav className="text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg rounded-b-xl bg-transparent backdrop-blur-md">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo Section */}
            <Link
              to="banner"
              className="flex items-center text-white font-semibold text-xl space-x-2 cursor-pointer"
            >
              <span className="block lg:inline">Sound Asian Sound Dataset</span>
            </Link>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden">
              <button
                id="menu-toggle"
                className="text-black focus:outline-none"
                onClick={() => {
                  const menu = document.getElementById("menu");
                  menu.classList.toggle("hidden");
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div
              id="menu"
              className="hidden lg:flex lg:space-x-8 lg:text-white lg:static lg:backdrop-blur-none lg:shadow-md lg:p-0 lg:rounded-none absolute top-14 left-0 backdrop-blur-md shadow-lg w-full lg:w-auto lg:flex-row rounded-b-xl p-4"
            >
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="banner"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer shadow-lg transition-all"
                >
                  Home
                </Link>
                <Link
                  to="dataset"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer shadow-lg transition-all"
                >
                  Dataset
                </Link>
                <Link
                  to="features"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer shadow-lg transition-all"
                >
                  Features
                </Link>
                <Link
                  to="links"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer shadow-lg transition-all"
                >
                  Links
                </Link>
                <Link
                  to="usage"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer shadow-lg transition-all"
                >
                  Usage Policy
                </Link>
                <Link
                  to="contributors"
                  smooth={true}
                  duration={500}
                  className="text-lg font-semibold px-6 py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white cursor-pointer shadow-lg transition-all"
                >
                  Contributors
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Banner Section */}
        <section
          id="banner"
          className="bg-cover bg-center text-white relative flex items-center justify-center h-[78vh] overflow-hidden"
          style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
        >
          <div className="container mx-auto px-4 py-40 flex flex-col items-center text-center">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold mx-4 sm:mx-16 md:mx-60 lg:mx-80 xl:mx-96 mb-4 text-white drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)] bg-[rgba(0,0,0,0.5)] px-4 py-2 rounded-md font-['Poppins']">
                SAS-KIIT
              </h1>
              <p className="text-lg sm:text-xl mx-2 sm:mx-4 md:mx-32 text-white drop-shadow-[1px_1px_2px_rgba(255,255,255,0.6)] bg-[rgba(0,0,0,0.4)] px-3 py-1 rounded-md font-['Montserrat'] mb-3">
                Urban Sound Audio dataset which contains 21 classes of data from
                different regional sounds.
              </p>

              <Link
                to="dataset"
                smooth={true}
                duration={500}
                className="bg-white text-blue-600 px-6 py-2 rounded shadow-lg hover:bg-gray-200 transition"
              >
                Explore Dataset
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Dataset Section */}
      <section
        id="dataset"
        className="bg-gradient-to-r from-sky-800 to-sky-900 py-16"
      >
        <div className="container mx-auto px-4 text-lg text-white">
          {/* Heading */}
          <h2 className="text-5xl font-extrabold text-white-300 mb-8 flex items-center justify-center mt-2">
            South Asian Sound Dataset Overview
          </h2>

          {/* Description */}
          <p className="leading-relaxed mb-8 text-center md:text-left text-lg md:text-xl lg:text-2xl max-w-7xl mx-auto">
            The South Asian Sound Dataset (SAS-KIIT) is a unique collection of
            21 distinct audio classes, capturing the vibrant and diverse urban
            soundscapes of South Asia. Designed to facilitate the development of
            advanced sound classification algorithms, this dataset plays a
            pivotal role in the evolution of urban sound monitoring systems,
            fostering progress in smart city initiatives and urban planning.
          </p>

          {/* Banner Image */}
          <div className="flex justify-center mb-10">
            <img
              src={pic}
              alt="Dataset Banner"
              className="w-full max-w-6xl rounded-lg shadow-2xl"
            />
          </div>
          <p className="text-center mb-6 text-sm text-gray-300">
            Fig: Sample Sound Clips from the South Asian Sound Dataset
            (SAS-KIIT).
          </p>

          {/* Data Collection */}
          <h3 className="text-3xl font-semibold text-yellow-200 mb-6 flex items-center">
            <FaDatabase className="mr-3 text-4xl" />
            Data Collection
          </h3>
          <p className="leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
            The SAS-KIIT dataset was compiled from various South Asian urban
            areas, showcasing a rich diversity of sounds. These include noises
            from bustling streets, regional festivals, urban nature, and more.
            This collection is ideal for developing robust sound classification
            models tailored for urban sound analysis in South Asia.
          </p>

          {/* Data Segmentation */}
          <h3 className="text-3xl font-semibold text-yellow-200 mb-6 flex items-center">
            <FaCut className="mr-3 text-4xl" />
            Data Segmentation
          </h3>
          <p className="leading-relaxed mb-8 text-lg max-w-2xl mx-auto">
            To ensure consistency and facilitate better model training, the
            audio recordings were segmented into 4-second intervals. Each class
            includes 450 distinct audio segments, creating a total of 9,450
            segments. These segments are organized systematically, ensuring
            efficient access and processing for subsequent analysis.
          </p>

          {/* 21 Sound Classes */}
          <h3 className="text-3xl font-semibold text-yellow-200 mb-6 flex items-center">
            <FaListOl className="mr-3 text-4xl" />
            21 Sound Classes
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg mb-8">
            {class_names.map((className, index) => (
              <li key={index} className="bg-sky-600 p-4 rounded-lg shadow-md">
                {className}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-r bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-10 flex items-center justify-center mt-12">
            <FaStar className="text-yellow-400 mr-3" />
            Key Features of the SAS-KIIT Dataset
          </h2>
          <div className="space-y-10">
            {/* Diverse Sound Classes */}
            <div className="flex items-start space-x-6">
              <FaGlobe className="text-green-500 text-4xl" />
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Diverse Sound Classes
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The SAS-KIIT dataset features 21 distinct sound classes,
                  representing a wide variety of urban sounds, perfect for
                  building sound classification models.
                </p>
              </div>
            </div>

            {/* High-Quality Audio Segments */}
            <div className="flex items-start space-x-6">
              <FaDatabase className="text-indigo-400 text-4xl" />
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  High-Quality Audio Segments
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The dataset includes over 9,000 meticulously segmented
                  4-second audio clips, offering high-quality data ideal for
                  real-time classification tasks.
                </p>
              </div>
            </div>

            {/* Detailed Annotations */}
            <div className="flex items-start space-x-6">
              <FaPenFancy className="text-purple-500 text-4xl" />
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Detailed Annotations
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Each audio sample is carefully annotated with class labels,
                  providing high-quality ground truth data for model training
                  and evaluation.
                </p>
              </div>
            </div>

            {/* Designed for Sound Classification */}
            <div className="flex items-start space-x-6">
              <FaClock className="text-indigo-400 text-4xl" />
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Designed for Sound Classification
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Optimized for training sound classification models, the
                  dataset is a valuable resource for developing robust solutions
                  in urban sound analysis.
                </p>
              </div>
            </div>

            {/* Augmentation Techniques */}
            <div className="flex items-start space-x-6">
              <FaTools className="text-yellow-400 text-4xl" />
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Augmentation Techniques
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The dataset supports various augmentation techniques, such as
                  noise addition and time-stretching, to help improve model
                  generalization.
                </p>
              </div>
            </div>

            {/* 10-Fold Cross-Validation */}
            <div className="flex items-start space-x-6">
              <FaChartPie className="text-teal-400 text-4xl" />
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  10-Fold Cross-Validation
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The SAS-KIIT dataset is divided into 10 random folders for
                  cross-validation, ensuring a robust evaluation process and
                  improving the models generalization ability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Audio Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {class_names.map((name, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <audio controls className="w-full mb-2">
                  <source
                    src={`/src/assets/audio_${index + 1}.wav`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
                <h3 className="text-lg font-semibold mb-2">Spectrogram</h3>
                <img
                  src={`/src/assets/spec_${index + 1}.png`}
                  alt={`Spectrogram of ${name}`}
                  className="w-full h-32 object-cover mb-2"
                />
                <h3 className="text-lg font-semibold mb-2">Waveform</h3>
                <img
                  src={`/src/assets/wav_${index + 1}.png`}
                  alt={`Waveform of ${name}`}
                  className="w-full h-32 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dataset Links Section */}
      <section
        id="links"
        className="bg-gradient-to-r from-teal-300 to-indigo-500 py-20"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-white mb-16 flex items-center justify-center mt-12">
            <FaLink className="mr-3 text-yellow-400" />
            SAS-KIIT Dataset Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kaggle Link */}
            <div className="bg-white shadow-xl rounded-lg p-6 flex items-start space-x-4 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
              <FaExternalLinkAlt className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  Kaggle Dataset
                </h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Explore the SAS-KIIT dataset on Kaggle for detailed insights
                  and examples.
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 mt-4 inline-block hover:underline text-lg"
                >
                  Visit Kaggle <FaExternalLinkAlt className="inline" />
                </a>
              </div>
            </div>

            {/* Google Drive Link */}
            <div className="bg-white shadow-xl rounded-lg p-6 flex items-start space-x-4 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
              <DiGoogleDrive className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-green-600">
                  Google Drive
                </h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Download a local copy of the SAS-KIIT dataset for your
                  research and analysis.
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 mt-4 inline-block hover:underline text-lg"
                >
                  Download Now <FaDownload className="inline" />
                </a>
              </div>
            </div>

            {/* Mega Link */}
            <div className="bg-white shadow-xl rounded-lg p-6 flex items-start space-x-4 hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
              <SiMega className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-2xl font-semibold text-red-600">
                  Mega Dataset
                </h3>
                <p className="text-gray-700 mt-2 text-xl">
                  Access the SAS-KIIT dataset directly from Mega for detailed
                  analysis and research applications.
                </p>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 mt-4 inline-block hover:underline text-lg"
                >
                  Access Mega <FaExternalLinkAlt className="inline" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Policy Section */}
      <section
        id="usage"
        className="bg-gradient-to-r from-gray-100 to-indigo-200 py-16"
      >
        <div className="container mx-auto px-6">
          <div className="bg-white shadow-2xl rounded-xl p-8">
            <h2 className="text-4xl font-bold text-indigo-800 mb-6 flex items-center justify-center mt-10">
              <FaExclamationCircle className="text-indigo-500 mr-3" />
              Usage Policy
            </h2>
            <p className="text-gray-800 leading-relaxed mb-6 text-xl">
              This SAS-KIIT dataset is intended for <strong>academic</strong>{" "}
              and <strong>research purposes only</strong>. Commercial use is
              strictly prohibited. Users must give proper attribution to the
              creators if this dataset is utilized in any project or
              publication.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2 flex items-center">
                <GiInspiration className="mr-2 text-indigo-400" />
                Inspiration
              </h3>
              <p className="text-gray-700 text-xl">
                The SAS-KIIT dataset was developed for research in computer
                vision and defense applications, particularly focusing on
                tracking and identifying military objects in drone-captured
                imagery. It offers a valuable resource for advancing research in
                autonomous surveillance and object recognition systems.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <p className="text-gray-800 text-xl">
                  The dataset may only be used for academic research,
                  proof-of-concept models, or non-commercial purposes.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <p className="text-gray-800 text-xl">
                  Redistribution of the dataset without proper permission from
                  the authors is prohibited.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <p className="text-gray-800 text-xl">
                  If this dataset is used in a publication or project, full
                  credit must be provided to the creators.
                </p>
              </div>
              {/* License */}
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-2 flex items-center">
                  <FaShieldAlt className="mr-2 text-indigo-400" />
                  License
                </h3>
                <p className="text-gray-800 text-xl">
                  This dataset is licensed under the Attribution-NonCommercial
                  4.0 International license (
                  <a
                    href="https://creativecommons.org/licenses/by-nc/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    CC BY-NC 4.0
                  </a>
                  )
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
        <div className="container mx-auto text-center space-y-3">
          <h3 className="text-xl font-semibold">South Asian Sounds - KIIT</h3>
          <p className="text-sm opacity-80">
            Empowering AI Research in Sound Classification & Deep Learning
          </p>

          {/* Links */}
          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              Research Papers
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              Publications
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/sas-kiit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-2xl hover:text-gray-400"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/sas-kiit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-2xl hover:text-blue-500"></i>
            </a>
            <a
              href="https://sas-kiit.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe text-2xl hover:text-green-400"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs opacity-70 mt-4">
            &copy; 2024 South Asian Sounds - KIIT. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
