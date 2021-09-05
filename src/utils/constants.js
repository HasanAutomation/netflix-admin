export function formatUserData(users = []) {
  return users.map(user => ({
    id: user._id,
    username: user.username,
    email: user.email,
    avatar: user.avatar || 'https://picsum.photos/200',
    status: 'active',
  }));
}
