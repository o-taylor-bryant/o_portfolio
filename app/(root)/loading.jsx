export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#fff",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #000",
          borderRadius: "50%",
          background: "#fff",
        }}
      >
        <div className="spinner" />
        <style>{`
          .spinner {
            width: 20px;
            height: 20px;
            border: 3px solid #bbb;
            border-top: 3px solid #000;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    </div>
  );
}
