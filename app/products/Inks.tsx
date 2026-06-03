"use client";

import { Tab, Tabs, Typography } from "@mui/material";
import { Grid, useMediaQuery, useTheme } from "@mui/system";
import { useState } from "react";
import ReactiveTab from "./ReactiveTab";

export default function Inks() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        size={12}
        sx={{
          pt: { xs: 4, sm: 5, md: 2 },
          pb: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 4, md: 10 },
        }}
      >
        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "28px", sm: "34px", md: "40px" },
            fontWeight: 500,
            color: "#000",
            lineHeight: "104%",
          }}
        >
          Inks
        </Typography>

        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            fontWeight: 400,
            color: "#404040",
            mt: 1,
          }}
        >
          Precision Engineered Industrial Printing Inks
        </Typography>
      </Grid>
      <Grid size={12} sx={{ mt: { xs: 3, md: 5 } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered={!isMobile}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
          allowScrollButtonsMobile
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#F7931E",
              height: "3px",
            },

            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#222",
              px: { xs: 2, md: 4 },
              mx: { md: 4 },

              "&.Mui-selected": {
                color: "#000",
              },
            },
          }}
        >
          <Tab label="Reactive" />
          <Tab label="Sublimation" />
          <Tab label="Pigment" />
        </Tabs>
      </Grid>
      <Grid size={12} sx={{ mt: 4 }}>
        {value === 0 && <ReactiveTab />}
        {/* {value === 1 && <LabelPrinting />}
        {value === 2 && <PublicationPrinting />}
        {value === 3 && <InkSolutions />} */}
      </Grid>
    </>
  );
}
