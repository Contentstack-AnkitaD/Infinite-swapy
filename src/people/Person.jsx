export function Person({ name, hairColor, eyeColor }) {
  return (
    <li
      style={{
        backgroundColor: "#f8f8f8",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        
      }}>
      {name}
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0",
          marginTop: "10px",
        }}>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
}
