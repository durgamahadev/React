import { useEffect, useState } from "react";

function App() {
  const [perPage, setPerPage] = useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGitHubUsers();
  }, [perPage]);

  async function fetchGitHubUsers() {
    try {
      const response = await fetch(
        `https://api.github.com/users?per_page=${perPage}`,
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      console.log("hello");
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
    }
  }
  console.log("Component rendered");
  return (
    <>
      <section id="center">
        <h1>GitHub Users</h1>
        <input
          type="number"
          name="per_page"
          id="per_page"
          style={{ height: "30px", width: "500px", fontSize: "20px" }}
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {data.length > 0 ? (
            data.map((user: any) => (
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                height="100"
                key={user.login}
                style={{
                  borderRadius: "50%",
                  border: "2px solid #000",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease",
                }}
              />
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
