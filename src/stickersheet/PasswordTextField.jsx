import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import WhiteTextField from "./WhiteTextField";

const PasswordTextField = ({ label = "Password", onValueChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (onValueChange) {
      onValueChange(newPassword);
    }
  };

  return (
    <WhiteTextField
      label={label}
      type={showPassword ? "text" : "password"}
      value={password}
      onValueChange={onValueChange}
      onChange={handlePasswordChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              style={{ color: "white" }}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordTextField;
