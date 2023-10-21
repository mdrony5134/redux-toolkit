import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    let userList = localStorage.getItem("userList");
    userList = userList ? JSON.parse(userList) : [];
    let checkUser = userList.some(
      ({ email, password }) =>
        email === data.email && password === data.password
    );

    if (checkUser) {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } else {
      alert("User not registered!");
      navigate("/singUp"); // Should be "/signUp" instead of "/SingUp"
    }
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-[400px] w-full">
        <h3 className="text-2xl font-bold text-center mb-4">Login</h3>
        <input
          className="w-full mb-4 p-2 border rounded"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) =>
            setData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="mt-4">
          Don't have an account?
          <Link className="text-blue-500 hover:underline" to="/singup">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
