export default function ProjectsPage() {
  return (
    <section>
      <h1 style={{ marginBottom: "60px", fontSize: "36px" }}>Projects</h1>

      {/* Money man app */}
      <div style={{ marginBottom: "60px" }}>
        <h2>Money Man</h2>
        <p>
          A money management app built with Android Studio, 
        </p>
        <a href="https://github.com/ajbravo2003/Coding-Programs/tree/46aca891412ddd3d1eafa560118704befecea67e/Android%20Studio-Kotlin-Projects/Money-Man%20app" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      {/* into the shadows program */}
      <div style={{ marginBottom: "60px" }}> 
        <h2>Into the Shadows</h2>
        <p>
         A zombie survival game built with Unity and C#. 
        </p>
        <a href="https://github.com/ajbravo2003/Coding-Programs/tree/46aca891412ddd3d1eafa560118704befecea67e/Unity_C%23%20Program/Into%20The%20Shadows%20Unity" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
        {/* <br /><br />
        <a href="my new webiste link herre" target="_blank" rel="noopener noreferrer">
          Play Into The Shadows
        </a>      */}
      </div>
      
      {/* Rare Task reminder app */}
      <div>
        <h2>Rare Task Reminder</h2>
        <p>
         A desktop appliaction to help manage rare tasks built with CSS, HTML, and JSON. 
        </p>
        <a href="https://github.com/ajbravo2003/Coding-Programs/tree/46aca891412ddd3d1eafa560118704befecea67e/HTML%2BCSS%2BJSON" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </section>
  );
}
