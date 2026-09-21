function pluralize(count, singular, plural) {
  return count + " " + (count === 1 ? singular : plural);
}

export default function RequestCounter({ requests }) {
  return <p className="counter">{pluralize(requests.length, "solicitud", "solicitudes")}</p>;
}
