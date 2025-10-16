'use client';

export default function ResumePage() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
        color: '#fff',
        fontFamily: "'Orbitron', sans-serif",
        position: 'relative',
      }}
    >
      {/*Title*/}
      <h1
        style={{
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
          animation: 'glowText 3s ease-in-out infinite',
        }}
      >
        🧠 Resume
      </h1>

      {/* Resume */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <a
          href="/resume.pdf"
          download
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#61dafb',
            color: '#000',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
          className="download-btn"
        >
          📥 Download My Resume (PDF)
        </a>
      </div>

      {/* Experience Section */}
      <SectionTitle title="Professional Experience" />
      <Experience
        role="Into the Shadows — Unity Game Developer"
        date="Jan 2025 - Present"
        bullets={[
          'Developed a first-person stealth game using Unity and C#.',
          'Collaborated with a 3-member team using Kanban methodology.',
          'Built core gameplay systems, AI behavior, and level design.',
          'Integrated assets from both Unity Asset Store and custom models.',
          'Packaged and deployed the game for WebGL and desktop platforms.',
        ]}
      />
      <Experience
        role="Money Man — Android Developer"
        date="Aug 2024 – Dec 2024"
        bullets={[
          'Built a personal finance Android app for budgeting and expense tracking.',
          'Worked in a 4-person team using Scrum methodology and JIRA.',
          'Created frontend with XML and backend logic in Kotlin.',
          'Integrated Firebase for cloud storage and authentication.',
        ]}
      />
      <Experience
        role="Rare Task Manager — Web Developer"
        date="Aug 2024 - Dec 2024"
        bullets={[
          'Developed a web-based task manager using HTML, CSS, and JSON.',
          'Led task categorization feature implementation.',
          'Worked in a 5-person Scrum team with JIRA task management.',
          'Managed version control via GitHub.',
        ]}
      />
      <Experience
        role="Illinois Secretary of State —  Public Service Representative"
        date="Jun 2023 - Aug 2023"
        bullets={[
          'Processed guest appointments, ID validations, and registrations.',
          'Provided professional, knowledgeable assistance to visitors.',
          'Guided new representatives on proper workflow and procedures.',
        ]}
      />

      {/*Education */}
      <SectionTitle title="Education" />
      <div style={{ marginBottom: '2rem' }}>
        <p>
          <strong>Bachelor of Science — Computer Science</strong>
          <br />
          University of Illinois at Chicago (2021 - 2025)
        </p>
        <p>
          <strong>High School Diploma</strong>
          <br />
          ITW David Speer Academy (2017 - 2021)
        </p>
      </div>

      {/* Skills */}
      <SectionTitle title="Skills" />
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.5rem 1.5rem',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {[
          'C / C++',
          'Python / PythonSQL',
          'Java / JavaFX',
          'F#',
          'Ruby',
          'Unity / C#',
          'Kotlin / Android Studio',
          'JavaScript / TypeScript',
          'React / Next.js',
          'HTML / CSS',
          'Git / GitHub',
          'Scrum / Jira',
        ].map((skill, idx) => (
          <li
            key={idx}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '0.5rem 0.75rem',
              borderRadius: '6px',
              textAlign: 'center',
            }}
          >
            {skill}
          </li>
        ))}
      </ul>

      {/* Styles */}
      <style>{`
        @keyframes glowText {
          0% { text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff; }
          50% { text-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
          100% { text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff; }
        }

        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 20px #61dafb;
        }
      `}</style>
    </section>
  );
}

/* Title */
function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      style={{
        fontSize: '1.8rem',
        marginTop: '3rem',
        marginBottom: '1rem',
        borderBottom: '2px solid #61dafb',
        paddingBottom: '0.5rem',
        letterSpacing: '1px',
      }}
    >
      {title}
    </h2>
  );
}

/*Experience */
function Experience({
  role,
  date,
  bullets,
}: {
  role: string;
  date: string;
  bullets: string[];
}) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{role}</h3>
      <p style={{ fontStyle: 'italic', color: '#aaa', marginBottom: '0.5rem' }}>
        {date}
      </p>
      <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
        {bullets.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.4rem' }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
