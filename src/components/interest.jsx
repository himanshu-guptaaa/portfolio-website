const Interest = () => {
  return (
    <section id="projects" className="py-20 bg-black text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-8 text-blue-200 italic">Interest</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white border">Communication</div>
          <div className="p-4 bg-white border">Startup</div>
          <div className="p-4 bg-white border">Exploring</div>
        </div>
      </div>
    </section>
  );
};

export { Interest }; // Named export
