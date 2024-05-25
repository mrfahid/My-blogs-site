import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "./login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to log in");
      console.error(err); // Log the actual error
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <div className="left-col">
        <h1>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="facebook-logo"
          />
        </h1>
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="right-col">
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}

          <div>
            <label>
              <input
                type="email"
                ref={emailRef}
                required
                placeholder="example@email.com"
              />
            </label>
            <label>
              <input
                type="password"
                ref={passwordRef}
                required
                placeholder="Password"
              />
            </label>
          </div>
          <div className="btn">
            <button className="login-btn" disabled={loading} type="submit">
              Log In
            </button>
          </div>
          <Link className="forgot-pass">Forgot password?</Link>
          <p className="signup">
            <Link to="/signup" className="signup-link">
              Create New Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
