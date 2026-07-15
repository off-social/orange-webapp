import { Box, Typography } from "@mui/material";
import Image from "next/image";

const initiatives = [
  {
    img: "/SpreadingSmilesThroughGiving.webp",
    imgLeft: true,
    title: "Spreading Smiles Through Giving",
    paragraphs: [
      "At Orange O Tec, giving back is more than a responsibility—it is a core part of who we are. In 2023, we proudly donated footwear to 1,500 children studying in government schools, helping them take confident steps toward their dreams.",
      "This initiative was driven by our commitment to supporting underserved communities and improving the lives of young students by addressing their essential needs. By providing comfort and care, we aimed to inspire hope and create a positive impact on their everyday lives.",
      "Every smile we create reinforces our belief that even small acts of kindness can make a meaningful difference in building a brighter future.",
    ],
  },
  {
    img: "/PromotingGoodHealthWell-Being.webp",
    imgLeft: false,
    title: "Promoting Good Health and Well-Being",
    paragraphs: [
      "At Orange O Tec, we are dedicated to fostering healthier and more active communities. Through initiatives such as marathons, fitness drives, and wellness-focused programs, we encourage individuals to embrace healthy lifestyles and prioritize their physical well-being.",
      "These activities not only promote fitness but also bring people together, strengthening community bonds and inspiring collective participation toward a common goal. Our commitment to health and wellness reflects our broader vision of creating a happier, healthier, and more vibrant society.",
      "By supporting initiatives that encourage active living, we continue to take meaningful steps toward building a healthier tomorrow for generations to come.",
    ],
  },
];

export default function CSRInitiatives() {
  return (
    <Box
      sx={{
        bgcolor: "#FFF",
        py: { xs: "48px", sm: "64px", md: "80px" },
        px: { xs: "16px", sm: "32px", md: "40px" },
      }}
    >
      <Box
        sx={{
          mx: "auto",
          width: "100%",
          maxWidth: "914px",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "48px", md: "64px" },
        }}
      >
        {/* Section header — 728px max per Figma */}
        <Box
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: "728px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "40px" },
              fontWeight: 500,
              lineHeight: { xs: "31.2px", sm: "36.4px", md: "46.8px", lg: "52px" },
              letterSpacing: { xs: 0, lg: "-1px" },
            }}
          >
            Building a Better Tomorrow, Together
          </Typography>
          <Typography
            sx={{
              color: "#707070",
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              fontWeight: 500,
              lineHeight: { xs: "19.2px", sm: "20.8px", md: "22.4px" },
            }}
          >
            Driven by purpose, we invest in communities and initiatives that create
            lasting positive impact and meaningful change.
          </Typography>
        </Box>

        {initiatives.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: item.imgLeft ? "row" : "row-reverse",
              },
              alignItems: { xs: "stretch", md: "center" },
              gap: "24px",
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: { xs: "100%", md: "351px" },
                aspectRatio: "351 / 468",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 900px) 100vw, 350px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                flex: 1,
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
                  fontWeight: 500,
                  lineHeight: {
                    xs: "26px",
                    sm: "31.2px",
                    md: "36.4px",
                    lg: "41.6px",
                  },
                  letterSpacing: { xs: 0, lg: "-1px" },
                }}
              >
                {item.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {item.paragraphs.map((para, pIdx) => (
                  <Typography
                    key={pIdx}
                    sx={{
                      color: "#707070",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "22.4px",
                    }}
                  >
                    {para}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
