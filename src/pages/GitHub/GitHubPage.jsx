import { useEffect, useState } from "react";
import './GitHubPage.css';

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

    <p className="gh-intro">
      Here's my GitHub profile, brought to you via their API 🌟
      <br/>
      You can view my public repositories and more 🚀
    </p>
    <div className="github-profile">
      {/* Profile Section */}
      <div className="gh-profile">
        <div className="gh-profile-header">
      <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="github-avatar" />
      <div className="gh-profile-name">
      <h2 className="gh-name">{profile.name}</h2>
      <p className="gh-username">{profile.login}</p>
      <p className="gh-email">{profile.email}</p>
      <p className="gh-website"><a href={profile.blog} target="_blank" rel="noopener noreferrer">{profile.blog}</a></p>
      <p>Joined GitHub: {new Date(profile.created_at).toLocaleDateString("en-US")} &nbsp;🎄</p>
      </div> {/* End of profile Name */}
</div> {/* End of Profile Header */}

<div className="gh-profile-info">
      <p className="gh-location">📍 {profile.location}</p>
      <p>{profile.bio}</p>
      <p>Followers: {profile.followers} | Following: {profile.following}</p>
      <p>Last Updated: {new Date(profile.updated_at).toLocaleDateString("en-US")}</p>
      <p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </p>
      </div> {/* End of Profile Info */}
      </div> {/* End of Profile Section */}

      {/* Repos Section */}
      <div className="repo-section">
      {repos.length === 0 ? (
        <p>No public repositories found.</p>
      ) : (
        <ul className="repo-list">
          <h3>Public Repositories: {profile.public_repos}</h3>
          {repos.map((repo) => (
            <li key={repo.id} className="repo-item">
              <a className="repo-name" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <strong>{repo.name}</strong>
              </a>
              {/* &nbsp; */}
              {
              repo.description && 
              <p className="repo-description">
                {repo.description}
                </p>}
              <p className="repo-language">
                {/* ⭐ {repo.stargazers_count} | 
                🍴 {repo.forks_count} |  */}
                &nbsp;
                &nbsp;
         <span>🛠️ {repo.language}</span>
                </p>
            </li>
          ))}
        </ul>
      )}
      </div> {/* End of Repos Section */}
    </div> {/* End of GitHub Profile */}

    </>
  );
}