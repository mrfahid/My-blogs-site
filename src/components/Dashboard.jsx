import { useAuth } from '../auth/AuthContext';

const Dashboard = () => {
  const { currentUser, logOut } = useAuth();

  return (
    <div>
    <h2>Dashboard</h2>
    <p>Welcome, {currentUser.email}</p>
    <button onClick={logOut}>Log Out</button>
  </div>
  )
}

export default Dashboard