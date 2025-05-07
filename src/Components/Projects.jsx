function Projects() {
    return (
      <section id="projects" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600 mb-4">Short description about the project.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
          <div className="p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600 mb-4">Short description about the project.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
        </div>
      </section>
    );
  }
  export default Projects;
  