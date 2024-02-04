import { Button } from "@mui/material";

const CustomButton = ({
  type,
  text,
  color,
  background,
  borderColor,
  hoverBackground,
  hoverborderColor,
  onClick,
}) => {
  return (
    <Button
      type={type}
      variant="outlined"
      size="large"
      sx={{
        textTransform: "none",
        borderColor: borderColor,
        color: color,
        background: background,
        textShadow: "0px 0px 15px black",
        "&:hover": {
          background: hoverBackground,
          borderColor: hoverborderColor,
        },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
