import { useEffect, useState } from "react";


export default function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const username = "siguejessy"; // Replace with your GitHub username
  const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // Access token from .env file

  useEffect(() => {
    async function fetchGitHubProfile() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${GITHUB_API_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    }
    fetchGitHubProfile();
  }, [GITHUB_API_KEY]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="github-avatar" />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </p>
    </div>
  );
}