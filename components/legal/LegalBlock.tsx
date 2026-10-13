import { Box, Typography } from "@mui/material";
import Link from "next/link";

export type ContentBlock =
  | { type: "para"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string }
  | { type: "keyval"; items: { key: string; val: string; link?: string }[] };

export function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === "para") {
    return (
      <Typography
        key={idx}
        sx={{
          color: "#555",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "13px", sm: "14px" },
          fontWeight: 400,
          lineHeight: "22.4px",
          mt: idx === 0 ? 0 : "12px",
        }}
      >
        {block.text}
      </Typography>
    );
  }

  if (block.type === "subheading") {
    return (
      <Typography
        key={idx}
        sx={{
          color: "#333",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "13px", sm: "14px" },
          fontWeight: 600,
          lineHeight: "22.4px",
          mt: "14px",
        }}
      >
        {block.text}
      </Typography>
    );
  }

  if (block.type === "list") {
    return (
      <Box
        key={idx}
        sx={{
          mt: idx === 0 ? 0 : "12px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {block.items.map((item, i) => (
          <Box
            key={i}
            sx={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            <Box
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                bgcolor: "#F6891F",
                flexShrink: 0,
                mt: "8px",
              }}
            />
            <Typography
              sx={{
                color: "#555",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "13px", sm: "14px" },
                fontWeight: 400,
                lineHeight: "22.4px",
                flex: 1,
              }}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  }

  if (block.type === "keyval") {
    return (
      <Box
        key={idx}
        sx={{
          mt: idx === 0 ? 0 : "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {block.items.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              alignItems: "baseline",
            }}
          >
            <Typography
              sx={{
                color: "#333",
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "12px", sm: "13px" },
                fontWeight: 600,
                lineHeight: "20px",
                whiteSpace: "nowrap",
              }}
            >
              {item.key}:
            </Typography>
            {item.link ? (
              <Link
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  color: "#F6891F",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  textDecoration: "none",
                }}
              >
                {item.val}
              </Link>
            ) : (
              <Typography
                sx={{
                  color: "#555",
                  fontFamily: "Inter, sans-serif",
                  fontSize: { xs: "12px", sm: "13px" },
                  fontWeight: 400,
                  lineHeight: "20px",
                }}
              >
                {item.val}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return null;
}
