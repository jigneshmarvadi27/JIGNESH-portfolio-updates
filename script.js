const projects = [
  {
    title: "Warehouse Robot",
    description: "A robot capable of carrying 2000 kg payloads in warehouses. Compact and efficient!",
    image: "assets/warehouse-robot.jpg",
    video: "assets/warehouse-robot-demo.mp4",
  },
  {
    title: "Pipe Inspection Robot",
    description: "A robot designed to inspect welding defects in pipes and display the exact location.",
    image: "assets/pipe-inspection-robot.jpg",
    video: "assets/pipe-inspection-robot-demo.mp4",
  },
];

const projectsContainer = document.getElementById('projects-container');

projects.forEach(project => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <img src="${project.image}" alt="${project.title}">
    <p>${project.description}</p>
    <video controls>
      <source src="${project.video}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;

  projectsContainer.appendChild(projectDiv);
});
