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



import audio1 from "./assets/audio_1.wav";
import audio2 from "./assets/audio_2.wav";
import audio3 from "./assets/audio_3.wav";
import audio4 from "./assets/audio_4.wav";
import audio5 from "./assets/audio_5.wav";
import audio6 from "./assets/audio_6.wav";
import audio7 from "./assets/audio_7.wav";
import audio8 from "./assets/audio_8.wav";
import audio9 from "./assets/audio_9.wav";
import audio10 from "./assets/audio_10.wav";
import audio11 from "./assets/audio_11.wav";
import audio12 from "./assets/audio_12.wav";
import audio13 from "./assets/audio_13.wav";
import audio14 from "./assets/audio_14.wav";
import audio15 from "./assets/audio_15.wav";
import audio16 from "./assets/audio_16.wav";
import audio17 from "./assets/audio_17.wav";
import audio18 from "./assets/audio_18.wav";
import audio19 from "./assets/audio_19.wav";
import audio20 from "./assets/audio_20.wav";
import audio21 from "./assets/audio_21.wav";

import spec1 from "./assets/spec_1.png";
import spec2 from "./assets/spec_2.png";
import spec3 from "./assets/spec_3.png";
import spec4 from "./assets/spec_4.png";
import spec5 from "./assets/spec_5.png";
import spec6 from "./assets/spec_6.png";
import spec7 from "./assets/spec_7.png";
import spec8 from "./assets/spec_8.png";
import spec9 from "./assets/spec_9.png";
import spec10 from "./assets/spec_10.png";
import spec11 from "./assets/spec_11.png";
import spec12 from "./assets/spec_12.png";
import spec13 from "./assets/spec_13.png";
import spec14 from "./assets/spec_14.png";
import spec15 from "./assets/spec_15.png";
import spec16 from "./assets/spec_16.png";
import spec17 from "./assets/spec_17.png";
import spec18 from "./assets/spec_18.png";
import spec19 from "./assets/spec_19.png";
import spec20 from "./assets/spec_20.png";
import spec21 from "./assets/spec_21.png";

import wave1 from "./assets/wav_1.png";
import wave2 from "./assets/wav_2.png";
import wave3 from "./assets/wav_3.png";
import wave4 from "./assets/wav_4.png";
import wave5 from "./assets/wav_5.png";
import wave6 from "./assets/wav_6.png";
import wave7 from "./assets/wav_7.png";
import wave8 from "./assets/wav_8.png";
import wave9 from "./assets/wav_9.png";
import wave10 from "./assets/wav_10.png";
import wave11 from "./assets/wav_11.png";
import wave12 from "./assets/wav_12.png";
import wave13 from "./assets/wav_13.png";
import wave14 from "./assets/wav_14.png";
import wave15 from "./assets/wav_15.png";
import wave16 from "./assets/wav_16.png";
import wave17 from "./assets/wav_17.png";
import wave18 from "./assets/wav_18.png";
import wave19 from "./assets/wav_19.png";
import wave20 from "./assets/wav_20.png";
import wave21 from "./assets/wav_21.png";

const audioFiles = [
  audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10,
  audio11, audio12, audio13, audio14, audio15, audio16, audio17, audio18, audio19, audio20, audio21
];

const specImages = [
  spec1, spec2, spec3, spec4, spec5, spec6, spec7, spec8, spec9, spec10,
  spec11, spec12, spec13, spec14, spec15, spec16, spec17, spec18, spec19, spec20, spec21
];

const waveImages = [
  wave1, wave2, wave3, wave4, wave5, wave6, wave7, wave8, wave9, wave10,
  wave11, wave12, wave13, wave14, wave15, wave16, wave17, wave18, wave19, wave20, wave21
];




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
  "Afghanistan Pashto Music",
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
              A diverse urban sound dataset capturing regional audio patterns from South Asia.
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
          A Glimpse of the Sounds: Visual Representations of Audio Classes
          </p>

          {/* Data Collection */}
          <h3 className="text-3xl font-semibold text-yellow-200 mb-6 flex items-center">
            <FaDatabase className="mr-3 text-4xl" />
            Data Collection
          </h3>
          <p className="leading-relaxed mb-8 text-lg max-w-2xl mx-auto text-justify ">
          The SAS-KIIT dataset was compiled from various South Asian urban areas, mainly from Bangladesh, India, 
          Nepal, Afghanistan, and Bhutan, showcasing a rich diversity of sounds. These include noises from bustling streets, regional festivals, 
          urban nature, and more. This collection is ideal for developing robust sound classification models tailored for urban sound analysis in South Asia.
          </p>

          {/* Data Segmentation */}
          <h3 className="text-3xl font-semibold text-yellow-200 mb-6 flex items-center">
            <FaCut className="mr-3 text-4xl" />
            Data Segmentation
          </h3>
          <p className="leading-relaxed mb-8 text-lg max-w-2xl mx-auto text-justify">
          To ensure consistency and facilitate better model training, the audio recordings were segmented into 4-second intervals. 
          Each class includes 450 distinct audio segments, creating a total of 9,450 segments. These segments are systematically organized and 
          distributed in a 10-fold manner, enabling efficient access, processing, and cross-validation for subsequent analysis.
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
                  The dataset includes over 9,450 meticulously segmented
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
                The current version of the dataset does not include any built-in augmentation techniques.
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


      {/*From Sound to Signal: Audio Snapshots*/}

      <section className="bg-gray-100 py-10">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8">From Sound to Signal: Audio Snapshots</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {class_names.map((name, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center"
        >
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <audio controls className="w-full mb-2">
            <source src={audioFiles[index]} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h3 className="text-lg font-semibold mb-2">Spectrogram</h3>
          <img
            src={specImages[index]}
            alt={`Spectrogram of ${name}`}
            className="w-full h-32 object-cover mb-2"
          />
          <h3 className="text-lg font-semibold mb-2">Waveform</h3>
          <img
            src={waveImages[index]}
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
                  href="https://www.kaggle.com/datasets/sudipchakrabarty/south-asian-sounds-kiit"
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
                  href="https://drive.google.com/drive/folders/1HaHR8lAVr6NLFZ-sIaQ_GQzVVly56wq-?usp=sharing"
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

    Citation
  </h3>
  <p className="text-gray-700 text-xl mb-2">
    If you use this dataset in your research, please cite the following paper:
  </p>
  <a
    href="https://ieeexplore.ieee.org/document/10829485"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-600 underline text-xl mb-2 inline-block"
  >
    Paper Link
  </a>
  <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mt-2">
    <code>
      {`@inproceedings{chatterjee2024south,
  title={South Asian Sounds: Audio Classification},
  author={Chatterjee, Rajdeep and Bishwas, Pappu and Chakrabarty, Sudip and Bandyopadhyay, Tathagata},
  booktitle={2024 4th International Conference on Computer, Communication, Control & Information Technology (C3IT)},
  pages={1--6},
  year={2024},
  organization={IEEE}
}`}
    </code>
  </pre>
</div>



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
    This dataset is intended solely for academic research, experimental models, and other non-commercial uses.
  </p>
</div>
<div className="flex items-start space-x-4">
  <FaCheckCircle className="text-green-500 text-2xl" />
  <p className="text-gray-800 text-xl">
    Redistributing the dataset without prior authorization from the authors is strictly prohibited.
  </p>
</div>
<div className="flex items-start space-x-4">
  <FaCheckCircle className="text-green-500 text-2xl" />
  <p className="text-gray-800 text-xl">
  Proper attribution to the dataset&apos;s creators is required when used in any project or publication.
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
                  href="https://scholar.google.com/citations?user=GuH4taUAAAAJ&hl=en&oi=sra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="text-lg text-yellow-600 hover:text-white transition duration-200" />
                </a>
                <a
                  href="https://github.com/tatban/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg text-yellow-600 hover:text-white transition duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tathagata-bandyopadhyay/"
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
              href="https://www.linkedin.com/in/pappu-bishwas-tan87/"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              About
            </a>

            <a
              href="https://ieeexplore.ieee.org/document/10829485"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              Publications
            </a>
            <a
              href="#contributors"
              className="text-white hover:text-blue-400 transition duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/pappubishwas/SAS-KIIT-Dataset"
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
              href="https://kiitee.kiit.ac.in/"
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
