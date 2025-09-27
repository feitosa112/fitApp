export default function Custom500() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>500 – Server Error</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
}
