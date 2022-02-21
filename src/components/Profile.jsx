export const Profile = (props) => {
  return (<div className="profile" style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}>
    <div className="description">
    <img
        src={props.avatar }
      alt="User avatar"
        className="avatar"
        style={{
          width: 200,
          height:200,
    
  }}
    />
      <p className="name">{props.username}</p>
      <p className="tag">{props.tag}</p>
      <p className="location">{props.location}</p>
  </div>

    <ul className="stats"
    style={{
      listStyle: "none",
      display:"flex",
  }}>
      <li
      style={{
      
      display:"flex",
      flexDirection: "column",
    alignItems: "center",
  }}>
      <span className="label">Followers</span>
        <span className="quantity">{props.stats.followers}</span>
    </li>
      <li
      style={{
      
      display:"flex",
      flexDirection: "column",
    alignItems: "center",
  }}>
      <span className="label">Views</span>
      <span className="quantity">{props.stats.views}</span>
    </li>
      <li
      style={{
      
      display:"flex",
      flexDirection: "column",
    alignItems: "center",
  }}>
      <span className="label">Likes</span>
      <span className="quantity">{props.stats.likes}</span>
    </li>
  </ul>
</div>)
};

