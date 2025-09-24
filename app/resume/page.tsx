export default function ResumePage() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Resume</h1>
      <a href="/resume.pdf" download className="download-link">
        📥 Download My Resume (PDF)
      </a>

    {/* Professional Experience starts here */}
    <h2>Professional Experience</h2> 
        {/* into the shadows begins */}
        <section>
        <h3>Into the Shadows</h3>
        <p><em>Jan 2025 - Present</em></p>
        <ul>
            <li>First-person stealth game built in Unity, where players navigate dynamic environments to complete objectives undetected.</li>
            <li>Collaborated in a team of 3 using Kanban methodology.</li>
            <li>Developed core gameplay systems using C# for scripting.</li>
            <li>Integrated models from both custom assets and Unity Asset Store.</li>
            <li>Utilized Unity and supporting tools for game development and deployment.</li>
        </ul>
        </section>
        {/* Into the shadow ends */}

        {/* Money man section begin */}
        <section>
        <h3>Money Man</h3>
        <p><em>Aug 2024 - Dec 2024</em></p>
        <ul>
            <li>Personal finance tracking Android app for budgeting, visualizing expenses, and syncing data with Firebase.</li>
            <li>Worked in a team of 4 using Scrum methodology and collaborated via JIRA.</li>
            <li>Developed frontend using XML and backend logic in Kotlin.</li>
            <li>Implemented cloud data storage and user authentication via Firebase.</li>
            <li>Used Android Studio and GitHub for version control and development.</li>
        </ul>
        </section>
        {/* Money man section ends */}
    
    {/* Rare Task Manager begins */}
    <section>
    <h3>Rare Task Manager</h3>
    <p><em>Aug 2024 - Dec 2024</em></p>
    <ul>
        <li>Web-based task management tool allowing users to create, track, and categorize tasks using local JSON storage.</li>
        <li>Collaborated in a team of 5 using Scrum and managed tasks via JIRA.</li>
        <li>Built frontend using HTML and CSS; local data persisted via JSON.</li>
        <li>Utilized Visual Studio Code and GitHub for collaborative development.</li>
    </ul>
    </section>
    {/* Rare Task Manager ends */}

    {/* Public Service Representative begins */}
    <section>
    <h3>Public Service Representative - Illinois Secretary of State</h3>
    <p><em>Jun 2023 - Aug 2023</em></p>
    <ul>
        <li>Handled clerical duties including appointment confirmation, ID validation, and guest registration into official systems.</li>
        <li>Provided knowledgeable, courteous assistance to guests on service processes and documentation requirements.</li>
        <li>Trained and guided new public service representatives on workflow and proper procedures.</li>
    </ul>
    </section>
    {/* Public Service Representative ends */}

    {/* Education begins */}
      <h2>Education</h2>
      <p>
        <em><strong>Bachelor of Science</strong> - Major in Computer Science</em><br/>
        University of Illinois at Chicago, 2021 - 2025

        <em><br/><br/><strong>High School diploma</strong></em><br/>
        ITW David Speer Academy, 2017 - 2021

      </p>
    {/* Education ends */}

    {/* Skills begins */}
      <h2>Skills</h2>
      <ul>
        <li>C++ / C </li>
        <li>Python / PythonSQL </li>
        <li>Java / JavaFX </li>
        <li>F# </li>
        <li>Ruby </li>
        <li>Unity / C# </li>
        <li>Kotlin / Android Studio </li>
        <li>JavaScript / TypeScript</li>
        <li>React / Next.js</li>
        <li>HTML / CSS </li>
        <li>Git / GitHub</li>
        <li>Scrum methodology / Jira </li>
      </ul>
      {/* Skills ends */}
    </section>
  );
}
