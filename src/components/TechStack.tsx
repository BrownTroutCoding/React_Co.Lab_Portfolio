import {
    FaPython, FaDatabase, FaReact, FaHtml5, FaCss3Alt, FaJsSquare,
  } from 'react-icons/fa';
  import { SiPostgresql, SiTypescript, SiFlask } from 'react-icons/si';
  
  const TechStack = () => {
    return (
      <section id='TechStack' className="p-6 rounded-md mt-5 w-3/4 mx-auto">
          <div className="text-4xl mb-4 mt-5 flex justify-center font-serif">
              <h1>Tech Stack</h1>
          </div>
          <div className="grid grid-cols-5 gap-2 justify-items-center my-4 mt-10">
            <div className="text-center">
              <FaPython size={40} style={{ color: '#306998' }} />
              <p>Python</p>
            </div>
            <div className="text-center">
              <FaDatabase size={40} style={{ color: '#FFA500' }} />
              <p>SQL</p>
            </div>
            <div className="text-center">
              <SiPostgresql size={40} style={{ color: '#336791' }} />
              <p>Postgres</p>
            </div>
            <div className="text-center">
              <SiFlask size={40} style={{ color: '#000000' }} />
              <p>Flask</p>
            </div>
            <div className="text-center">
              <FaJsSquare size={40} style={{ color: '#F7DF1E' }} />
              <p>JavaScript</p>
            </div>
            <div className="text-center" style={{ marginLeft: '200px', marginTop: '30px' }}>
              <SiTypescript size={40} style={{ color: '#3178C6' }} />
              <p>TypeScript</p>
            </div>
            <div className="text-center" style={{ marginLeft: '200px', marginTop: '30px' }}>
              <FaReact size={40} style={{ color: '#61DAFB' }} />
              <p>React</p>
            </div>
            <div className="text-center" style={{ marginLeft: '200px', marginTop: '30px' }}>
              <FaHtml5 size={40} style={{ color: '#E34F26' }} />
              <p>HTML</p>
            </div>
            <div className="text-center" style={{ marginLeft: '200px', marginTop: '30px' }}>
              <FaCss3Alt size={40} style={{ color: '#1572B6' }} />
              <p>CSS</p>
            </div>
          </div>
      </section>
    );
  };
  
  export default TechStack;
  

