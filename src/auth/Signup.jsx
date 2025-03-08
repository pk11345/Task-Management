import React, { useState } from "react";

const Signup = ({ setIsLoggedIn, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
      setError("User already exists! Please login.");
      return;
    }

    const newUser = { email, password, tasks: [] }; // New user with empty tasks
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    localStorage.setItem("loggedInUser", email); // Keep user logged in
    setUser(email);
    setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full justify-center">
      <h2 className="text-2xl font-bold">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form className="flex flex-col gap-3" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
