function Avatar({ user }) {
  return <img className="Avatar" src={user.avatarUrl} alt={user.name} />;
}

export default Avatar;
