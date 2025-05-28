// src/components/About.jsx
import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import SkillsCarousel from '../components/SkillsCarousel.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('shivanshtyagi7974@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        
        {/* Intro */}
        <div className="col-span-1">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Shivansh Tyagi</p>
              <p className="grid-subtext">
                Enthusiastic developer with a knack for solving complex problems and building impactful tech solutions. Experienced in full-stack development, and creative project design using modern tools.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Carousel */}
        <div className="col-span-1">
          <div className="grid-container flex flex-col items-center">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain mb-4"
            />
            <SkillsCarousel />
          </div>
        </div>

        {/* Combined Globe & Contact Card */}
        <div className="col-span-2">
          <div className="grid-container bg-white p-6 rounded-2xl shadow-md grid gap-6 md:grid-cols-2">
            
            {/* Left: Globe + CTA */}
            <div className="flex flex-col items-center">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center mb-4">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                />
              </div>
              <p className="grid-headtext mb-2 text-center">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext mb-4 text-center">
                I'm based in Surat, Gujarat and open to remote work worldwide.
              </p>
              {/* Wrap Button to ensure click fires */}
              <div onClick={scrollToContact} className="cursor-pointer">
                <Button name="Contact Me" isBeam containerClass="inline-block" />
              </div>
            </div>

            {/* Right: Image + Email Copy */}
            <div className="flex flex-col items-center">
              <img
                src="assets/grid4.png"
                alt="grid-4"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain rounded-lg mb-4"
              />
              <p className="grid-subtext mb-2 text-center">Contact me</p>
              <div
                className="copy-container inline-flex items-center cursor-pointer"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  className="mr-2"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  shivanshtyagi7974@gmail.com
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
