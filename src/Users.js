import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <h1>Users List</h1>
      {loading ? <p>Loading users...</p> : (
        <ul className="user-list">
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong><br />
              <small>{user.email}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
