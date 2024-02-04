import React, { useState } from "react";
import WhiteTextField from "../../stickersheet/WhiteTextField";
import PasswordTextField from "../../stickersheet/PasswordTextField";
import CustomButton from "../../stickersheet/CustomButton";

const SignupForm = ({ onSignup, setToggleLogin }) => {
  const handleSignupButtonClick = () => {
    onSignup(name, email, password, confrimPassword);
  };

  const [name, setName] = useState("");
  const handleNameChange = (value) => {
    setName(value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const [confrimPassword, setConfirmPassword] = useState("");
  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  return (
    <div style={{ marginLeft: "20%", width: "100%" }}>
      {/* Name Field */}
      <div style={{ marginBottom: "20px" }}>
        <WhiteTextField label="Name" onValueChange={handleNameChange} />
      </div>

      {/* Email Field */}
      <div style={{ marginBottom: "20px" }}>
        <WhiteTextField
          label="Email"
          type="email"
          onValueChange={handleEmailChange}
        />
      </div>

      {/* Password Field */}
      <div style={{ marginBottom: "20px" }}>
        <PasswordTextField
          label="Password"
          onValueChange={handlePasswordChange}
        />
      </div>

      {/* Confrim Password Field */}
      <div style={{ marginBottom: "20px" }}>
        <PasswordTextField
          label="Confirm Password"
          onValueChange={handleConfirmPasswordChange}
        />
      </div>

      <div style={{ marginBottom: "20px", marginLeft: "25%" }}>
        <CustomButton
          type="button"
          text="Signup"
          color="white"
          borderColor="white"
          hoverBackground="rgba(255,255,255,0.3)"
          hoverBorderColor="white"
          onClick={handleSignupButtonClick}
        />
      </div>

      <div style={{ marginLeft: "3%" }}>
        <CustomButton
          text="Already have an account?"
          background="rgba(0,0,0,0.6)"
          hoverBackground="rgba(0,0,0,7)"
          onClick={() => {
            setToggleLogin(true);
          }}
        />
      </div>
    </div>
  );
};

export default SignupForm;
