import { Box, Typography } from "@mui/material";

const RESOURCES = [
  {
    img: "/ProductBrochure.png",
    title: "Product Brochure",
    desc: "Full specs, configurations, and print quality details for the Position Pro.",
    btnLabel: "Download Brochure",
    href: "/brochures/Greenedge-Series.pdf",
  },
];

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2v8M4.5 7l3.5 3.5L11.5 7M2.5 13.5h11"
        stroke="#FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResourceCard({
  img,
  title,
  desc,
  btnLabel,
  href,
}: (typeof RESOURCES)[0]) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px",
        alignItems: "center",
        gap: { xs: "16px", md: "31px" },
        alignSelf: "stretch",
        borderRadius: "16px",
        background: "#FAFAFA",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      {/* Cover image */}
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: { xs: "100%", sm: "185px" },
          height: { xs: "auto", sm: "258px" },
          aspectRatio: "38/53",
          objectFit: "cover",
          borderRadius: "12px",
          flexShrink: 0,
        }}
      />

      {/* Text + button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          gap: "32px",
          width: { xs: "100%", sm: "391px" },
          padding: { xs: "4px 8px 16px", sm: "0" },
        }}
      >
        {/* Title + desc */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "18px", md: "20px" },
              fontWeight: 500,
              lineHeight: "26px",
              letterSpacing: 0,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            {desc}
          </Typography>
        </Box>

        {/* Download button — full width on mobile */}
        <Box
          component="a"
          href={href}
          download
          sx={{
            display: "inline-flex",
            padding: "12px 20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "8px",
            alignSelf: { xs: "stretch", sm: "auto" },
            background: "#111",
            textDecoration: "none",
            cursor: "pointer",
            transition: "background 0.2s ease",
            "&:hover": { background: "#333" },
          }}
        >
          <DownloadIcon />
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "20.8px",
            }}
          >
            {btnLabel}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function GreenEdgeResources() {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#FFF",
        justifyContent: "center",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: {
            xs: "48px 16px",
            sm: "60px 24px",
            md: "60px 40px",
            lg: "80px 168px",
          },
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          alignSelf: "stretch",
          width: "100%",
          maxWidth: "1440px",
          boxSizing: "border-box",
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "28px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "36.4px", lg: "52px" },
              letterSpacing: { xs: "-0.5px", lg: "-1px" },
            }}
          >
            Green Edge Showcase
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "22.4px",
              maxWidth: "520px",
            }}
          >
            Access product brochures and technical information to explore the
            full capabilities of printers
          </Typography>
        </Box>

        {/* Cards list */}
        <Box
          sx={{
            display: "flex",
            padding: { xs: "0", lg: "0 94px" },
            flexDirection: "column",
            alignItems: "center",
            gap: "64px",
            alignSelf: "stretch",
            boxSizing: "border-box",
          }}
        >
          {RESOURCES.map((item) => (
            <ResourceCard key={item.title} {...item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
