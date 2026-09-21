function pluralize(count, singular, plural) {
  return count + " " + (count === 1 ? singular : plural);
}

export default function RequestCounter({ requests }) {
  const doneCount = requests.filter((request) => request.approved).length;

  return (
    <p className="counter">
      {pluralize(requests.length, "solicitud", "solicitudes")} · {pluralize(doneCount, "aprobada", "aprobadas")}
    </p>
  );
}
