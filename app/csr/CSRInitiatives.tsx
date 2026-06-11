import { Box, Typography } from "@mui/material";
import Image from "next/image";

const initiatives = [
  {
    img: "/SpreadingSmilesThroughGiving.png",
    imgLeft: true,
    title: "Spreading Smiles Through Giving",
    paragraphs: [
      "At Orange O Tec, giving back is more than a responsibility—it is a core part of who we are. In 2023, we proudly donated footwear to 1,500 children studying in government schools, helping them take confident steps toward their dreams.",
      "This initiative was driven by our commitment to supporting underserved communities and improving the lives of young students by addressing their essential needs. By providing comfort and care, we aimed to inspire hope and create a positive impact on their everyday lives.",
      "Every smile we create reinforces our belief that even small acts of kindness can make a meaningful difference in building a brighter future.",
    ],
  },
  {
    img: "/PromotingGoodHealthWell-Being.png",
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
        display: "flex",
        padding: {
          xs: "48px 16px",
          sm: "64px 40px",
          md: "80px 80px",
          lg: "80px 263px",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "48px", md: "64px" },
        alignSelf: "stretch",
        bgcolor: "#FFF",
      }}
    >
      {/* Header */}
      <Box
        sx={{
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
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: "-1px",
          }}
        >
          Building a Better Tomorrow, Together
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "12px", md: "14px" },
            fontWeight: 400,
            lineHeight: { xs: "19.2px", md: "22.4px" },
            maxWidth: "600px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur. Blandit etiam molestie non tellus
        </Typography>
      </Box>

      {/* Initiative rows */}
      {initiatives.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: item.imgLeft ? "row" : "row-reverse",
            },
            alignItems: { xs: "flex-start", sm: "flex-start" },
            gap: { xs: "24px", sm: "40px", md: "56px" },
            width: "100%",
          }}
        >
          {/* Image */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", sm: "351px" },
              height: { xs: "auto", sm: "468px" },
              aspectRatio: "3/4",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              style={{ objectFit: "cover", objectPosition: "50% center" }}
            />
          </Box>

          {/* Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              flex: 1,
            }}
          >
            <Typography
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "22px", md: "32px" },
                fontWeight: 500,
                lineHeight: { xs: "28.6px", md: "41.6px" },
                letterSpacing: "-1px",
              }}
            >
              {item.title}
            </Typography>

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
      ))}
    </Box>
  );
}
