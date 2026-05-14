export default function SearchBar({ city, setCity, onSearch }) {
  return (
    <div style={styles.box}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city..."
        style={styles.input}
      />

      <button onClick={onSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
}

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "220px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    background: "#2d6cdf",
    color: "white",
    cursor: "pointer",
  },
};