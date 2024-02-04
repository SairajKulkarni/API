import React, { useState } from "react";
import WhiteTextField from "../../stickersheet/WhiteTextField";
import PasswordTextField from "../../stickersheet/PasswordTextField";
import CustomButton from "../../stickersheet/CustomButton";

const LoginForm = ({ setToggleLogin }) => {
  return (
    <form style={{ marginLeft: "20%", width: "100%" }}>
      <div style={{ marginBottom: "20px" }}>
        <WhiteTextField
          label="Email"
          onValueChange={(value) => setEmail(value)}
          type="email"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <PasswordTextField
          label="Password"
          onValueChange={(value) => setPassword(value)}
        />
      </div>

      <div style={{ marginBottom: "17px", marginLeft: "25%" }}>
        <CustomButton
          type="button"
          text="Login"
          color="white"
          borderColor="white"
          hoverBackground="rgba(255,255,255,0.3)"
          hoverBorderColor="white"
        />
      </div>

      <div style={{ marginLeft: "7%" }}>
        <CustomButton
          text="Don't have an account?"
          background="rgba(0,0,0,0.6)"
          hoverBackground="rgba(0,0,0,7)"
          onClick={() => {
            setToggleLogin(false);
          }}
        />
      </div>
    </form>
  );
};

export default LoginForm;
