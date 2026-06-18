"use client";

import { useProduct } from "@/data/ProductContext";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Resources() {
  const { resources, name } = useProduct();

  // Hide the entire section when there's no downloadable PDF brochure.
  if (!resources.brochure.brochureUrl) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "40px", md: "64px" },
        padding: { xs: "64px 16px", md: "64px 40px", lg: "64px 168px" },
        alignSelf: "stretch",
        background: "#EFEFEF",
      }}
    >
      {/* Heading + description */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          maxWidth: "916px",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "31.2px", md: "52px" },
            letterSpacing: { xs: "0", md: "-1px" },
          }}
        >
          Resources
        </Typography>
        <Typography
          sx={{
            color: "#707070",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "22.4px",
          }}
        >
          {resources.description}
        </Typography>
      </Box>

      {/* Video + Brochure */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          maxWidth: "916px",
        }}
      >
        {/* YouTube embed */}
        {resources.videoUrl && (
          <Box
            sx={{
              alignSelf: "stretch",
              aspectRatio: "562/312",
              borderRadius: "16px",
              border: "5px solid #F2F2F2",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={resources.videoUrl}
              title={name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: "block", border: "none" }}
            />
          </Box>
        )}

        {/* Product Brochure row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            padding: "8px",
            alignItems: { xs: "stretch", sm: "center" },
            gap: { xs: "16px", sm: "31px" },
            alignSelf: "stretch",
            borderRadius: "16px",
            background: "#FAFAFA",
          }}
        >
          {/* Brochure cover image */}
          {resources.brochure.coverImage && (
            <Box
              sx={{
                width: { xs: "100%", sm: "185px" },
                height: { xs: "240px", sm: "258px" },
                borderRadius: "12px",
                border: "1px solid #EFEFEF",
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src={resources.brochure.coverImage}
                alt={resources.brochure.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>
          )}

          {/* Brochure info */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flex: 1,
              px: { xs: "8px", sm: "0" },
              pb: { xs: "8px", sm: "0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "26px",
                  letterSpacing: 0,
                }}
              >
                {resources.brochure.title}
              </Typography>
              <Typography
                sx={{
                  color: "#707070",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "22.4px",
                }}
              >
                {resources.brochure.desc}
              </Typography>
            </Box>
            <Button
              variant="contained"
              component="a"
              href={resources.brochure.brochureUrl}
              download
              startIcon={
                <Image
                  src="/DownIcon.svg"
                  alt="download"
                  width={16}
                  height={16}
                />
              }
              sx={{
                bgcolor: "#111",
                color: "#FFF",
                borderRadius: "8px",
                textTransform: "none",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                px: "16px",
                py: "10px",
                boxShadow: "none",
                alignSelf: "flex-start",
                "&:hover": { bgcolor: "#333", boxShadow: "none" },
              }}
            >
              Download Brochure
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
