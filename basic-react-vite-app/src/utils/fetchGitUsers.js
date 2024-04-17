export const fetchGitUsers = async () => {
  const res = await fetch("https://api.github.com/users/Mauricecliff");
  return res.json();
};
