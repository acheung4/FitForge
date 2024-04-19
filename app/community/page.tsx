export default function CommunityBoard() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
    {/* Vertical navbar */}
        <div style={{ width: '200px', backgroundColor: '#36393f', color: '#fff', padding: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Gyms</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Planet Fitness</li>
          <li>LA Fitness</li>
          <li>Barbell Brigade</li>
    {/* Add more gyms here */}
        </ul>
      </div>
    {/* Main content area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll' }}>
        <h1>Workout Community</h1>
        {/* Posts */}
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        {/* New post form */}
        <div>
          <textarea
            value={newPostText}
            onChange={e => setNewPostText(e.target.value)}
            placeholder="Type your message..."
            style={{ width: '100%', height: '100px', marginBottom: '10px' }}
          />
          <button onClick={handlePostSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}


//This lists all communities that have been created.