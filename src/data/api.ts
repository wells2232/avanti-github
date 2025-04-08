export async function fetchGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (response.status === 404) {
    throw new Error("User not found");
  }
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  return {
    avatarUrl: data.avatar_url,
    name: data.name || data.login,
    bio: data.bio || "",
  };
}
