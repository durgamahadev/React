import { useState } from "react";
import { useGetUserQuery } from "./redux/features/api/userApi";

function App() {
  const [perPage, setPerPage] = useState(5);

  const { data: gitHubUsers = [] } = useGetUserQuery(perPage);

  console.log("Component rendered");
  return (
    <>
      <section id="center">
        <h1>GitHub Users</h1>
        <input
          type="text"
          name="per_page"
          id="per_page"
          style={{
            height: "30px",
            width: "500px",
            fontSize: "20px",
            marginBottom: "10px",
          }}
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
          {gitHubUsers?.length > 0 ? (
            gitHubUsers?.map((user: any) => (
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
