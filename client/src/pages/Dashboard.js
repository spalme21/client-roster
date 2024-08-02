import { useAuth } from "../auth/AuthProvider";

function Dashboard() {
  const auth = useAuth();

  const clickHandler = () => {
    console.log(auth.user);
    console.log(auth.token);
  };

  return (
    <>
      <h1>Welcome, {auth.user.first_name}!</h1>
      <button onClick={clickHandler}>Click</button>
    </>
  );
}

export default Dashboard;
