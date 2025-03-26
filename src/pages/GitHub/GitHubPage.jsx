import { useEffect, useState } from "react";

export default function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]); // State to store repositories
  const username = "siguejessy"; // Replace with your GitHub username
  const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // Access token from .env file
  
  useEffect(() => {
    async function fetchGitHubData() {
      try {
        { /* Fetching Profile and Repos in parallel */ }
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Authorization: `Bearer ${GITHUB_API_KEY}` },
          }),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
            headers: { Authorization: `Bearer ${GITHUB_API_KEY}` },
          }),
        ]);

        if (!profileResponse.ok) throw new Error(`GitHub API returned ${profileResponse.status}`);
        if (!reposResponse.ok) throw new Error(`GitHub API returned ${reposResponse.status}`);

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        { /* Set profile and repos state to store */ }
        setProfile(profileData);
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    }

    fetchGitHubData();
  }, [GITHUB_API_KEY]);

  if (!profile) return <p>Loading...</p>;

  return (
    <>

    <div className="page-marker-github"></div>
    <h1 className="intro">
      GitHub Profile
    </h1>
    <p className="intro">
      Here's my GitHub profile, brought to you via their API 🌟
      <br/>
      You can view my public repositories and more 🚀
    </p>
    <div className="github-profile">
      {/* Profile Section */}
      <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="github-avatar" />
      <h2>{profile.name}</h2>
      <p>Username: {profile.login}</p>
      <p>Joined GitHub: {new Date(profile.created_at).toLocaleDateString("en-US")}</p>
      <p>Location: {profile.location}</p>
      <p>{profile.bio}</p>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      <p>Public Repos: {profile.public_repos}</p>
      <p>Company: {profile.company}</p>
      <p>Website: <a href={profile.blog} target="_blank" rel="noopener noreferrer">{profile.blog}</a></p>
      <p>Last Updated: {new Date(profile.updated_at).toLocaleDateString("en-US")}</p>
      <p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </p>

      {/* Repos Section */}
      <h3>Public Repositories</h3>
      {repos.length === 0 ? (
        <p>No public repositories found.</p>
      ) : (
        <ul className="repo-list">
          {repos.map((repo) => (
            <li key={repo.id} className="repo-item">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <strong>{repo.name}</strong>
              </a>
              {repo.description && <p>{repo.description}</p>}
              <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count} | 🛠️ {repo.language}</p>
            </li>
          ))}
        </ul>
      )}
    </div> {/* End of GitHub Profile */}

    </>
  );
}