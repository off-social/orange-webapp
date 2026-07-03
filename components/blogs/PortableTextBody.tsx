"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/react";

import { urlFor } from "@/lib/sanity/image";

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function shouldOpenInNewTab(
  href: string,
  openInNewTab?: boolean,
): boolean {
  if (typeof openInNewTab === "boolean") {
    return openInNewTab;
  }

  return isExternalHref(href);
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography
        component="p"
        sx={{
          color: "var(--grey-600, #333)",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25.6px",
        }}
      >
        {children}
      </Typography>
    ),
    h2: ({ children }) => (
      <Typography
        component="h2"
        sx={{
          color: "var(--black-600, #111)",
          fontFamily: "Inter, sans-serif",
          fontSize: "28px",
          fontWeight: 500,
          lineHeight: "31.2px",
          mt: "16px",
        }}
      >
        {children}
      </Typography>
    ),
    h3: ({ children }) => (
      <Typography
        component="h3"
        sx={{
          color: "var(--black-600, #111)",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "28px",
          mt: "8px",
        }}
      >
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => (
      <Box
        component="blockquote"
        sx={{
          borderLeft: "4px solid #F6891F",
          pl: "16px",
          color: "var(--grey-500, #707070)",
          fontStyle: "italic",
        }}
      >
        {children}
      </Box>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <Box
        component="ul"
        sx={{
          pl: "22px",
          color: "var(--grey-600, #333)",
          fontSize: "16px",
          lineHeight: "25.6px",
          listStyle: "disc",
          listStylePosition: "inside",
        }}
      >
        {children}
      </Box>
    ),
    number: ({ children }) => (
      <Box
        component="ol"
        sx={{
          pl: "22px",
          color: "var(--grey-600, #333)",
          fontSize: "16px",
          lineHeight: "25.6px",
          listStyle: "decimal",
          listStylePosition: "inside",
        }}
      >
        {children}
      </Box>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <Box component="strong" sx={{ fontWeight: 600, color: "var(--black-600, #111)" }}>
        {children}
      </Box>
    ),
    em: ({ children }) => <Box component="em">{children}</Box>,
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "";

      if (!href) {
        return <>{children}</>;
      }

      const openInNewTab = shouldOpenInNewTab(href, value?.openInNewTab);

      return (
        <Box
          component="a"
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          sx={{
            color: "#F6891F",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
            "&:hover": { color: "#111" },
          }}
        >
          {children}
        </Box>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(1200).auto("format").url();
      return (
        <Box sx={{ width: "100%" }}>
          <Image
            src={src}
            alt={value.alt || "Blog image"}
            width={1200}
            height={675}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
          {value.caption ? (
            <Typography
              sx={{
                mt: "8px",
                color: "var(--grey-500, #707070)",
                fontSize: "14px",
              }}
            >
              {value.caption}
            </Typography>
          ) : null}
        </Box>
      );
    },
  },
};

interface PortableTextBodyProps {
  value: PortableTextBlock[];
}

export default function PortableTextBody({ value }: PortableTextBodyProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "24px",
        width: "100%",
        "& > *": { width: "100%" },
      }}
    >
      <PortableText value={value} components={components} />
    </Box>
  );
}
