export default function Navbar() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#eee" }}>
      <nav>
        <ul style={{ display: "flex", gap: "1rem" }}>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
