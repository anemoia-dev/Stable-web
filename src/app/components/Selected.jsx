import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const Selected = ({ OptionsToChoose, optionChosen, navbarHeight, info }) => {
  const [infoAll, setInfoAll] = useState(info);

  useState(() => {
    setInfoAll(info);
  }, [info]);

  return (
    <Box
      sx={{
        height: "100%",
        //backgroundImage: `linear-gradient(to bottom,${infoAll.secondColor},${infoAll.thirdColor})`,
        backgroundImage:
          optionChosen === 0
            ? "rgba(211, 209, 212, 1)"
            : `linear-gradient(to bottom,${infoAll.secondColor},${infoAll.thirdColor})`,
      }}
    >
      {infoAll.secondColor} + {optionChosen} + {navbarHeight}
      <Button onClick={() => OptionsToChoose(-1)}>sfs</Button>
    </Box>
  );
};

export default Selected;
