export function Species({ name, language, averageLifespan }) {
  return (
    <li
      style={{
        backgroundColor: "#f8f8f8",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </li>
  );
}
