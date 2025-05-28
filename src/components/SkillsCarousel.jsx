// src/components/SkillsCarousel.jsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const skills = [
  'Data Structures',
  'C, C++',
  'React',
  'Node.js',
  'HTML/CSS',
  'JavaScript',
  'Express',
  'MongoDB',
  'SQL',
  'Three.js',
  'Supervised/Unsupervised ML',
  'Neural Networks',
  'Deep Learning',
];

const SkillsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = skills.length;

  const prevSkill = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSkill = () => setCurrent(current === length - 1 ? 0 : current + 1);

  return (
    <div className="w-full bg-black p-4 rounded-2xl shadow-lg">
      {/* Arrows and current skill */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevSkill}
          className="p-2 rounded-full hover:bg-gray-800 transition"
          aria-label="Previous Skill"
        >
          <FaArrowLeft size={20} className="text-white" />
        </button>

        <div className="flex-1 text-center px-2 sm:px-4">
          <p className="text-xl sm:text-2xl font-semibold text-white truncate">
            {skills[current]}
          </p>
        </div>

        <button
          onClick={nextSkill}
          className="p-2 rounded-full hover:bg-gray-800 transition"
          aria-label="Next Skill"
        >
          <FaArrowRight size={20} className="text-white" />
        </button>
      </div>

      {/* All skills blocks wrap without scrolling */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`px-3 py-1 rounded-lg cursor-pointer transition transform hover:scale-105
              ${idx === current ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}
          >
            <p className="text-sm sm:text-base truncate max-w-xs">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
