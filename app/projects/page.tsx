'use client';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Money Man',
      description: 'A money management app built with Android Studio.',
      github:
        'https://github.com/ajbravo2003/Coding-Programs/tree/46aca891412ddd3d1eafa560118704befecea67e/Android%20Studio-Kotlin-Projects/Money-Man%20app',
      demo: '#', //ADD GAME DEMOS
    },
    {
      title: 'Into the Shadows',
      description: 'A zombie survival game built with Unity and C#.',
      github:
        'https://github.com/ajbravo2003/Coding-Programs/tree/46aca891412ddd3d1eafa560118704befecea67e/Unity_C%23%20Program/Into%20The%20Shadows%20Unity',
      demo: '#',
    },
    {
      title: 'Rare Task Reminder',
      description:
        'A desktop application to help manage rare tasks built with CSS, HTML, and JSON.',
      github:
        'https://github.com/ajbravo2003/Coding-Programs/tree/46aca891412ddd3d1eafa560118704befecea67e/HTML%2BCSS%2BJSON',
      demo: '#',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '4rem 2rem',
        color: '#fff',
        fontFamily: "'Orbitron', sans-serif",
        overflow: 'hidden',
      }}
    >

      {/* Title */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '3rem',
          animation: 'glowText 3s ease-in-out infinite',
        }}
      >
        🚀 My Projects 🚀
      </h1>

      {/* Project Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            className="project-card"
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '1rem' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  background: 'transparent',
                  color: '#61dafb',
                  border: '1px solid #61dafb',
                  borderRadius: '8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'background 0.3s',
                }}
                className="btn"
              >
                View Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '0.5rem 1rem',
                  background: '#61dafb',
                  color: '#000',
                  borderRadius: '8px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'transform 0.3s',
                }}
                className="btn"
              >
                Try App
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Aesthics */}
      <style>{`
        @keyframes glowText {
          0% { text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff; }
          50% { text-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff; }
          100% { text-shadow: 0 0 10px #00bfff, 0 0 20px #00bfff; }
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
        }

        .btn:hover {
          background: #61dafb;
          color: #000 !important;
        }`}</style>
    </section>
  );
}
