import RequestItem from "./RequestItem";

export default function RequestList({ requests }) {
  if (requests.length === 0) {
    return (
      <ul>
        <li className="empty">Todavía no hay solicitudes.</li>
      </ul>
    );
  }

  return (
    <ul>
      {requests.map((request) => (
        <RequestItem key={request.id} request={request} />
      ))}
    </ul>
  );
}
