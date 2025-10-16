export default function ContactPage() {
  return (
    <section style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Me</h1>
      <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
        You can reach out to me via email or connect on LinkedIn.
      </p>

      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem" }}>
        <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
          📧
          <span>
            Email:{" "}
            <a href="mailto:ajbravo03@gmail.com" style={{ color: "#4db5ff", textDecoration: "none" }}>
              ajbravo03@gmail.com
            </a>
          </span>
        </li>

        <li style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px" }}>
          💼
          <span>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/alejandro-bravo-480b03277/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4db5ff", textDecoration: "none" }}
            >
              Linkedin
            </a>
          </span>
        </li>

        <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          🧠
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/ajbravo2003/Coding-Programs"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4db5ff", textDecoration: "none" }}
            >
              GitHub Repository
            </a>
          </span>
        </li>
      </ul>
    </section>
  );
}
