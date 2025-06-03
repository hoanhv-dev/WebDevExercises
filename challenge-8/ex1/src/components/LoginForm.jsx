import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Username: " + username);
    console.log("Password: " + password);
  };

  const handleUsernameSubmitted = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  const handlePasswordSubmitted = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  return (
    <div className="flex justify-center items-start py-10 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Login
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={handleUsernameSubmitted}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={handlePasswordSubmitted}
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>
        </form>
        {submitted && (
          <div className="mt-6 space-y-2">
            <h3 className="text-gray-700 font-medium">Username: {username}</h3>
            <h3 className="text-gray-700 font-medium">Password: {password}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
