import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please input information.");
    }

    localStorage.setItem("username", JSON.stringify(username));
    console.log("Username:", username);
    console.log("Password: ", password);
    setSubmitted(true);
    setLogin(true);
  };

  useEffect(() => {
    if (login) {
      navigate("/todo");
    }
  }, [login]);

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <h2 className="flex justify-center text-start text-3xl font-bold">
            Login
          </h2>

          <input
            type="text"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={handleUsername}
            required
            placeholder="Username"
          />

          <input
            type="password"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={handlePassword}
            required
            placeholder="Password"
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-colors"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        {submitted && (
          <div className="mt-6 space-y-2">
            <h3 className="text-gray-700 font-medium flex justify-start">
              Username: {username}
            </h3>
            <h3 className="text-gray-700 font-medium flex justify-start">
              Password: {password}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
