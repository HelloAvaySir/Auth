import React from 'react';

// Create a separate component for the actual home page content
const Home= () => {
  return (
    <div>
      {/* Team Section */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-2xl font-bold mb-12">The Core of Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Member 1 */}
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200" 
              alt="Morgan Drew - Manager" 
              className="rounded-lg mb-4 mx-auto"
            />
            <h4 className="font-semibold">Morgan Drew</h4>
            <p className="text-gray-500">Manager</p>
          </div>
          
          {/* Member 2 */}
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200" 
              alt="Jeffery Walker - Lead Designer" 
              className="rounded-lg mb-4 mx-auto"
            />
            <h4 className="font-semibold">Jeffery Walker</h4>
            <p className="text-gray-500">Lead Designer</p>
          </div>
          
          {/* Member 3 */}
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200" 
              alt="Andrew Steve - UI/UX Designer" 
              className="rounded-lg mb-4 mx-auto"
            />
            <h4 className="font-semibold">Andrew Steve</h4>
            <p className="text-gray-500">UI/UX Designer</p>
          </div>
        </div>
      </section>
      
      {/* Add other home page sections here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Welcome to MernClass</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your premier destination for learning the MERN stack and building amazing web applications.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Learn MongoDB</h3>
              <p className="text-gray-600">Master database design and operations with MongoDB.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Express.js</h3>
              <p className="text-gray-600">Build robust server-side applications with Express.js.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">React Development</h3>
              <p className="text-gray-600">Create dynamic user interfaces with React.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Node.js</h3>
              <p className="text-gray-600">Develop scalable backend services with Node.js.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;