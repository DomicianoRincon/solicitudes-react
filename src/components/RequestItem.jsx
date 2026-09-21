export default function RequestItem({ request }) {
  return (
    <li>
      <span className="marker">○</span>
      <span className="title">{request.title}</span>
    </li>
  );
}
