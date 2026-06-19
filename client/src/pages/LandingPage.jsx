import Navbar from "../components/Navbar/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "50px" }}>
        <h1>AI Interview Platform</h1>

        <p>
          Practice interviews with AI and improve your technical skills.
        </p>
      </div>
    </>
  );
}

export default LandingPage;