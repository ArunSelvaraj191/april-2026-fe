import { useEffect } from "react";

const RegisterPage = () => {
  useEffect(() => {
    console.log("Register Page Mounted");
  }, []);
  return (
    <div>
      <h1>Register Page</h1>
      <p>Welcome to the registration page!</p>
    </div>
  );
};

export default RegisterPage;
