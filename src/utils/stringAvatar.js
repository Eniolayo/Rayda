import stringToColor from "./stringToColor";

function stringAvatar(name) {
  return {
    sx: {
      width: 10,
      height: 10,
      fontSize: "13px",
      padding: 2,
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default stringAvatar;
