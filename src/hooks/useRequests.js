import { useState } from "react";

const sampleRequests = [
  { id: 1, title: "Ana Pérez · 5 días de descanso", approved: false, createdAt: "2026-09-14T08:05:00" },
  { id: 2, title: "Luis Gómez · Cita médica el jueves", approved: true, createdAt: "2026-09-14T08:10:00" },
  { id: 3, title: "Marta Díaz · Silla ergonómica", approved: false, createdAt: "2026-09-14T08:15:00" },
];

export function useRequests() {
  const [requests, setRequests] = useState(sampleRequests);

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
