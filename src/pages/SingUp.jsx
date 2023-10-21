import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignUp = () => {
    let userList = localStorage.getItem("userList");
    userList = userList ? JSON.parse(userList) : [];
    let checkUser = userList.some(({ email }) => email === data.email);

    if (checkUser) {
      alert("User already exists!");
    } else {
      localStorage.setItem("userList", JSON.stringify([...userList, data]));
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-4">Sign Up</h3>
        <input
          className="w-full mb-4 p-2 border rounded"
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) =>
            setData((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) =>
            setData((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSignUp}
        >
          SignUp
        </button>
        <div className="mt-4">
          Already have an account? 
          <Link className="text-blue-500 hover:underline" to="/login">
             Login here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
