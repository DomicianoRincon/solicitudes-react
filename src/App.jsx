import NewRequestForm from "./components/NewRequestForm";
import RequestList from "./components/RequestList";
import RequestCounter from "./components/RequestCounter";
import { useRequests } from "./hooks/useRequests";

export default function App() {
  const { requests, addRequest } = useRequests();

  return (
    <>
      <header>
        <h1>Solicitudes</h1>
        <p className="subtitle">Lo que llegó al área esta semana</p>
      </header>

      <main>
        <NewRequestForm onAdd={addRequest} />

        {/* controles de la lista */}

        <RequestList requests={requests} />
        <RequestCounter requests={requests} />
      </main>

      <footer>
        <p id="credits">Hecho por Tu Nombre</p>
      </footer>
    </>
  );
}
