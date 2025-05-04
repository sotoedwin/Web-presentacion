import './App.css';
import { FaCode, FaDatabase, FaShieldAlt, FaNetworkWired, FaGavel, FaUsers, FaLanguage, FaGamepad, FaMobileAlt, FaLock } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Edwin Soto Ortiz</h1>
        <h2>Ingeniero de Sistemas</h2>
        <p>
          Con interés y formación en ciberseguridad, complementado por experiencia en desarrollo web, videojuegos y
          aplicaciones móviles. Busco oportunidades que me permitan profundizar en el área de seguridad informática mientras aporto valor con mis conocimientos en desarrollo y tecnología.
        </p>
      </header>
      <section className="projects">
        <h3>🛠 Proyectos</h3>
        <ul>
          <li>
            <strong><FaGamepad /> USC RACE:</strong> Juego de carreras ambientado en la Universidad Santiago de Cali, con escenarios basados en su campus.
          </li>
          <li>
            <strong><FaMobileAlt /> TrainUp:</strong> App móvil para entrenamientos físicos por niveles, desarrollada con React Native.
          </li>
          <li>
            <strong><FaLock /> CyberIRM:</strong> Herramienta para gestión de incidentes de ciberseguridad en PYMES, con React, Django y PostgreSQL.
          </li>
        </ul>
      </section>
      <section className="skills">
        <h3><FaCode /> Habilidades</h3>
        <ul>
          <li><FaCode /> Lenguajes de programación</li>
          <li><FaDatabase /> Bases de datos</li>
          <li><FaShieldAlt /> Ciberseguridad</li>
          <li><FaNetworkWired /> Redes</li>
          <li><FaGavel /> Normativas</li>
          <li><FaUsers /> Trabajo en equipo</li>
        </ul>
      </section>

      <section className="languages">
        <h3><FaLanguage /> Idiomas</h3>
        <ul>
          <li>Español (Nativo)</li>
          <li>Inglés (Excelente)</li>
        </ul>
      </section>
      <footer className="footer">
        <p>© 2025 Edwin Soto Ortiz</p>
      </footer>
    </div>
  );
}

export default App;
