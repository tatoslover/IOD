function ProfileCard({ name, role, bio }) {
  return (
    <div className="componentBox">
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{bio}</p>
    </div>
  )
}

export default ProfileCard
