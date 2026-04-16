import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");  
  const [profile, setProfile] = useState(null);       
  const [repos, setRepos] = useState([]);          
  const [loading, setLoading] = useState(false);      
  const [error, setError] = useState("");             


  // Fetch GitHub profile & repos
  const fetchProfile = async () => {
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const resProfile = await fetch(`https://api.github.com/users/${username}`);
      const dataProfile = await resProfile.json();

      if (dataProfile.message === "Not Found") {
        setError("User not found");
        setProfile(null);
        setRepos([]);
        setLoading(false);
        return;
      }

      setProfile(dataProfile);

      // Fetch repos
      const resRepos = await fetch(dataProfile.repos_url);
      const dataRepos = await resRepos.json();
      setRepos(dataRepos);


      
    } catch (err) {
      setError("Error fetching data");
    }
    setLoading(false);
  };

  // Calculate total stars across all repos
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

  return (
    <div className="container">
      <h1>GitHub Profile Analyzer</h1>

      {/* Username input */}
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") fetchProfile(); }}
      />
      <button onClick={fetchProfile}>Search</button>

      {/* Loading & error messages */}
     {loading && (
  <div className="loading-spinner">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
   )}
     {error && <div className="error-alert">{error}</div>}

      {/* Profile info & Stats */}
      {profile && (
        <>
          {/* Profile Section */}
          <div className="profile-info">
            <img src={profile.avatar_url} alt="avatar" width="100" />
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
          </div>

          {/* Stats Section */}
          <div className="stats-box">
            <p>Followers: {profile.followers}</p>
            <p>Total Repos: {profile.public_repos}</p>
            <p>Total Stars: {totalStars}</p>
          </div>
        </>
      )}

      {/* Top 5 Repos sorted by stars */}
      {repos.length > 0 && (
        <>
          <h3>Top Repositories</h3>
          {[...repos]
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5)
            .map((repo) => (
              <div className="repo-card" key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                <p>⭐ {repo.stargazers_count}</p>
                <p>🖥 Language: {repo.language || "N/A"}</p>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default App;