import { Button, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        size={12}
        sx={{
          textAlign: "center",
          py: { xs: 10, md: 18 },
          px: { xs: 3, sm: 8 },
          minHeight: { xs: "300px", md: "500px" },
          bgcolor: "#272727",
          backgroundImage: "url('/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "30px", md: "38px" },
            fontWeight: 600,
            width: { xs: "100%", sm: "456px", md: "575px" },
            mx: "auto",
            lineHeight: 1.3,
            textAlign: "center",
            color: "#fff",
          }}
        >
          Transform Your Textile Printing with Digital Innovation
        </Typography>

        <Grid
          sx={{
            mt: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              bgcolor: "#fff",
              borderColor: "#fff",
              borderRadius: "19.58px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" },
              px: { xs: 3, md: 4 },
              width: { xs: "160px", sm: "auto" },
            }}
          >
            Get a Quote
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#000",
              bgcolor: "#fff",
              borderColor: "#fff",
              borderRadius: "19.58px",
              textTransform: "none",
              fontSize: { xs: "12px", md: "14px" },
              px: { xs: 3, md: 4 },
              width: { xs: "160px", sm: "auto" },
            }}
          >
            View Products
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
