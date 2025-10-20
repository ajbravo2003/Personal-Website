'use client';

export default function About() {
  return (
    <section
      className="py-20 px-6 max-w-3xl mx-auto text-center sm:text-left"
      style={{ color: '#fff', fontFamily: "'Orbitron', sans-serif" }}
    >
      {/* Title */}
      <h2
        className="text-4xl font-bold mb-6"
        style={{
          textShadow: '0 0 8px #8e2de2, 0 0 15px #4a00e0, 0 0 25px #8e2de2',
          animation: 'glowText 3s ease-in-out infinite',
        }}
      >
        About Me
      </h2>

      {/* Paragraph */}
      <div
        className="text-lg leading-relaxed space-y-4"
        style={{
          textShadow: '0 0 4px #8e2de2, 0 0 8px #4a00e0',
        }}
      >
        <p>
          I’m a <span style={{ color: '#61dafb', fontWeight: 600 }}>recent Computer Science graduate</span> with a strong passion for software development and game design. I love building creative, functional, and efficient solutions across different platforms.
        </p>

        <p>
          My expertise includes{' '}
          <span style={{ color: '#FFD700' }}>
            Java, C++, C#, Python, Kotlin, SQL, F#, and Golang
          </span>
          , along with experience in{' '}
          <span style={{ color: '#ADFF2F' }}>Unity game development</span> and{' '}
          <span style={{ color: '#ADFF2F' }}>Android app development</span>. I’m skilled in both object-oriented and block-based programming paradigms.
        </p>

        <p>
          I also have a solid foundation in{' '}
          <span style={{ color: '#FF69B4' }}>data structures, algorithms, and time complexity analysis</span>, which helps me write clean and optimized code.
        </p>

        <p>
          I thrive in collaborative environments, applying{' '}
          <span style={{ color: '#FF69B4' }}>Scrum and Agile methodologies</span> to tackle complex
          problems and deliver impactful results. I’m fluent in English and Spanish, enabling effective communication in diverse teams.
        </p>

        <p>
          My goal is to bring my skills to a{' '}
          <span style={{ color: '#00BFFF' }}>dynamic software engineering role</span>, where I can grow, solve meaningful problems, and contribute to innovative projects.
        </p>
      </div>

      {/*
      <div className="mx-auto mt-10">
        <img
          src="photo.jpg"
          alt="My photo"
          className="w-32 h-32 rounded-full mx-auto"
          style={{
            boxShadow: '0 0 10px #8e2de2, 0 0 20px #4a00e0',
          }}
        />
      </div>
      */}

      <style>{`
        @keyframes glowText {
          0% { text-shadow: 0 0 8px #8e2de2, 0 0 15px #4a00e0; }
          50% { text-shadow: 0 0 15px #8e2de2, 0 0 30px #4a00e0; }
          100% { text-shadow: 0 0 8px #8e2de2, 0 0 15px #4a00e0; }
        }
      `}</style>
    </section>
  );
}
