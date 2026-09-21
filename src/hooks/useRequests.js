import { useEffect, useState } from "react";

const STORAGE_KEY = "solicitudes.requests";

const sampleRequests = [
  { id: 1, title: "Ana Pérez · 5 días de descanso", approved: false, createdAt: "2026-09-14T08:05:00" },
  { id: 2, title: "Luis Gómez · Cita médica el jueves", approved: true, createdAt: "2026-09-14T08:10:00" },
  { id: 3, title: "Marta Díaz · Silla ergonómica", approved: false, createdAt: "2026-09-14T08:15:00" },
];

function loadRequests() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.warn("No se pudo leer lo que estaba guardado.", error);
  }
  return sampleRequests;
}

export function useRequests() {
  const [requests, setRequests] = useState(loadRequests);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    } catch (error) {
      console.warn("No se pudo guardar.", error);
    }
  }, [requests]);

  function addRequest(title) {
    setRequests((current) => [
      ...current,
      { id: Date.now(), title: title, approved: false, createdAt: new Date().toISOString() },
    ]);
  }

  function toggleRequest(id) {
    setRequests((current) =>
      current.map((request) => (request.id === id ? { ...request, approved: !request.approved } : request))
    );
  }

  return { requests, addRequest, toggleRequest };
}
