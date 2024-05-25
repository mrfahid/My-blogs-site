import { useRef, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError(err.message); // Display the actual error message
      console.error("Signup error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="container">
          {error && <p className="error">{error}</p>}
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
          <label>
            <input type="email" ref={emailRef} required placeholder="Email" />
          </label>
          <label>
            <input
              type="password"
              ref={passwordRef}
              required
              placeholder="Password"
            />
          </label>
          <label>
            <input
              type="password"
              ref={passwordConfirmRef}
              required
              placeholder="Confirm Password"
            />
          </label>
            <button className="signup-btn" disabled={loading} type="submit">
              Sign Up
            </button>
          <p className="signup">
            Already have an account?{" "}
            <Link className="login-link" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
