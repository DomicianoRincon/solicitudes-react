export default function RequestItem({ request, onToggle }) {
  return (
    <li>
      <button
        type="button"
        className="check"
        aria-label={request.approved ? "Marcar como pendiente" : "Marcar como aprobada"}
        onClick={() => onToggle(request.id)}
      >
        {request.approved ? "●" : "○"}
      </button>
      <span className={request.approved ? "title done" : "title"}>{request.title}</span>
    </li>
  );
}
