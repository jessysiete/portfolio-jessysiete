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
      Brought to you via GitHub's API 🚀
      <br />
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9464 0C8.02249 0 0 8.02083 0 17.9437C0 25.8756 5.14029 32.5897 12.2712 34.9661C13.1628 35.1447 13.4893 34.58 13.4893 34.1049C13.4893 33.689 13.46 32.2631 13.46 30.7774C8.46771 31.8471 7.42812 28.6384 7.42812 28.6384C6.62584 26.5588 5.4371 26.0243 5.4371 26.0243C3.80314 24.9251 5.55612 24.9251 5.55612 24.9251C7.36861 25.044 8.31967 26.767 8.31967 26.767C9.92388 29.4999 12.5089 28.7277 13.5489 28.2523C13.6973 27.0936 14.173 26.2916 14.6781 25.846C10.6964 25.4301 6.50718 23.8853 6.50718 16.9929C6.50718 15.0321 7.21984 13.428 8.34906 12.1804C8.1709 11.7348 7.54678 9.8926 8.52759 7.42693C8.52759 7.42693 10.0429 6.95151 13.4596 9.2688C14.9224 8.87602 16.431 8.67621 17.9464 8.67453C19.4617 8.67453 21.0064 8.88271 22.4328 9.2688C25.8498 6.95151 27.3651 7.42693 27.3651 7.42693C28.346 9.8926 27.7215 11.7348 27.5433 12.1804C28.7023 13.428 29.3856 15.0321 29.3856 16.9929C29.3856 23.8853 25.1963 25.4002 21.1849 25.846C21.8388 26.4104 22.403 27.4797 22.403 29.1732C22.403 31.5795 22.3736 33.5107 22.3736 34.1046C22.3736 34.58 22.7006 35.1447 23.5918 34.9665C30.7227 32.5894 35.863 25.8756 35.863 17.9437C35.8924 8.02083 27.8405 0 17.9464 0Z" fill="currentColor"/>
</svg>
    </p>
    <div className="github-profile-page">
      {/* Profile Section */}
      <div className="gh-profile">
        <div className="gh-profile-header">
          <div className="gh-profile-avi-location">
      <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="github-avatar" />
      </div> {/* End of Profile avi/location  */}
      <div className="gh-profile-text">
      <h2 className="gh-name">{profile.name}</h2>
      <p className="gh-username">{profile.login}</p>
      <p className="gh-joined">Date Joined: {new Date(profile.created_at).toLocaleDateString("en-US")} &nbsp;🎄</p>
      <p className="gh-updated">Last Updated: {new Date(profile.updated_at).toLocaleDateString("en-US")}</p>
      <p className="gh-location">📍 {profile.location}</p>
      </div> {/* End of profile text */}
</div> {/* End of Profile Header */}

<div className="gh-profile-info">
      <p className="gh-bio">{profile.bio}</p>
        <button className="gh-button"><a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a></button>
      <p className="gh-email"> ✉️ {profile.email}</p>
      <p className="gh-website">🔗 <a href={profile.blog} target="_blank" rel="noopener noreferrer">{profile.blog}</a></p>
      <p className="gh-follow">👤 Followers: {profile.followers} | Following: {profile.following}</p>
      <p>
      </p>
      </div> {/* End of Profile Info */}
      </div> {/* End of Profile Section */}

      {/* Repos Section */}
{/* Repos Section */}
<div className="repo-section">
  {repos.length === 0 ? (
    <p>No public repositories found.</p>
  ) : (
    <ul className="repo-list">
    <h3 className="repo-section-title">Public Repositories: {profile.public_repos}</h3>
    <li className="repo-item repo-header">
      <span className="repo-name"><strong>Repository Name</strong></span>
      <span className="repo-description"><strong>Description</strong></span>
      <span className="repo-language"><strong>Language</strong></span>
    </li>
    {repos.map((repo) => (
      <li key={repo.id} className="repo-item">
        <a className="repo-name" href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
        <span className="repo-description">
          {repo.description ? repo.description : "No description available"}
        </span>
        <span className="repo-language">
          {repo.language ? `🛠️ ${repo.language}` : "N/A"}
        </span>
      </li>
    ))}
  </ul>
  )}
</div>

    </div> {/* End of GitHub Profile */}

    </>
  );
}