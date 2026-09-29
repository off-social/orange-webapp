"use client";

import type { ShowcaseTableData } from "@/data/product.types";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Typography } from "@mui/material";

const FONT = "Inter, sans-serif";
const ORANGE = "#F6891F";
const DARK = "#111";

const cellText = {
  fontFamily: FONT,
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: 500,
  lineHeight: { xs: "22.4px", md: "25.6px" },
} as const;

const copy = {
  color: "#707070",
  textAlign: "center",
  fontFamily: FONT,
  fontSize: { xs: "14px", md: "16px" },
  fontWeight: { xs: 500, md: 400 },
  lineHeight: { xs: "22.4px", md: "25.6px" },
  maxWidth: "730px",
} as const;

/**
 * The orange/dark joined card, row-aligned: the first column sits on orange,
 * the rest on dark, and each row's cells stay side by side.
 *
 * Two columns stay side by side on phones too. With three or more, phones
 * stack each row — the orange first cell, then the dark cells, each labelled
 * with its column name.
 */
function Card({
  label,
  columns,
  rows,
}: {
  label: string;
  columns: string[];
  rows: string[][];
}) {
  const wide = columns.length > 2;
  const firstPct = `${100 / columns.length}%`;
  const padX = wide
    ? { xs: "16px", sm: "32px", md: "32px", lg: "40px" }
    : { xs: "16px", sm: "32px", md: "64px" };

  return (
    <Box
      role="table"
      aria-label={label}
      sx={{
        display: "grid",
        gridTemplateColumns: wide
          ? { xs: "1fr", md: `repeat(${columns.length}, minmax(0, 1fr))` }
          : { xs: "42% 58%", md: "1fr 1fr" },
        // Same split painted behind the cells hides sub-pixel seams between rows
        background: wide
          ? {
              xs: DARK,
              md: `linear-gradient(to right, ${ORANGE} ${firstPct}, ${DARK} ${firstPct})`,
            }
          : {
              xs: `linear-gradient(to right, ${ORANGE} 42%, ${DARK} 42%)`,
              md: `linear-gradient(to right, ${ORANGE} 50%, ${DARK} 50%)`,
            },
        width: "100%",
        borderRadius: "32px",
        overflow: "hidden",
        boxShadow: "0px 20px 20px rgba(0,0,0,0.06)",
      }}
    >
      {/* Header row */}
      <Box role="row" sx={{ display: "contents" }}>
        {columns.map((col, i) => (
          <Box
            key={col}
            role="columnheader"
            sx={{
              background: i === 0 ? ORANGE : DARK,
              // Stacked phone layout labels each dark cell instead
              display: wide && i > 0 ? { xs: "none", md: "flex" } : "flex",
              flexDirection: "column",
              gap: "8px",
              pt: { xs: "32px", md: wide ? "48px" : "64px" },
              px: padX,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: FONT,
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 500,
                  lineHeight: { xs: "26px", md: "31.2px" },
                }}
              >
                {col}
              </Typography>
              {i === 0 && (
                <BoltIcon
                  sx={{ color: "#FFF", fontSize: { xs: "20px", md: "24px" } }}
                />
              )}
            </Box>
            <Box
              sx={{
                mt: "16px",
                width: "100%",
                height: "1px",
                bgcolor:
                  i === 0 ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Body rows */}
      {rows.map((row, r) => {
        const lastRow = r === rows.length - 1;
        const endPad = { xs: "32px", md: wide ? "48px" : "64px" };
        return (
          <Box key={row[0]} role="row" sx={{ display: "contents" }}>
            {row.map((value, c) => {
              const lastCell = c === row.length - 1;
              const pt = wide
                ? {
                    xs: c === 0 ? "20px" : c === 1 ? "16px" : "8px",
                    md: "24px",
                  }
                : { xs: "20px", md: "24px" };
              const pb = wide
                ? {
                    xs:
                      c === 0
                        ? "16px"
                        : lastCell
                          ? lastRow
                            ? "32px"
                            : "20px"
                          : 0,
                    md: lastRow ? endPad.md : 0,
                  }
                : lastRow
                  ? endPad
                  : 0;

              if (c === 0) {
                return (
                  <Box
                    key={c}
                    role="rowheader"
                    sx={{
                      background: ORANGE,
                      pt,
                      pb,
                      px: padX,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <CheckIcon
                      sx={{
                        color: "#FFF",
                        fontSize: "20px",
                        flexShrink: 0,
                        mt: "2px",
                      }}
                    />
                    <Typography sx={{ ...cellText, color: "#FFF" }}>
                      {value}
                    </Typography>
                  </Box>
                );
              }
              return (
                <Box
                  key={c}
                  role="cell"
                  sx={{ background: DARK, pt, pb, px: padX }}
                >
                  <Typography sx={{ ...cellText, color: "#EFEFEF" }}>
                    {wide && (
                      <Box
                        component="span"
                        sx={{
                          display: { xs: "inline", md: "none" },
                          color: "#999",
                        }}
                      >
                        {columns[c]}:{" "}
                      </Box>
                    )}
                    {value}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}

/** Optional H2, intro line, the card, then an optional note underneath. */
export default function ShowcaseTable({
  name,
  table,
}: {
  name: string;
  table: ShowcaseTableData;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: "24px", md: "32px" },
        width: "100%",
      }}
    >
      {(table.heading || table.intro) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            width: "100%",
          }}
        >
          {table.heading && (
            <Typography
              component="h2"
              sx={{
                m: 0,
                color: "#333",
                textAlign: "center",
                fontFamily: FONT,
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: 500,
                lineHeight: { xs: "31.2px", md: "41.6px" },
                letterSpacing: { xs: "0", md: "-1px" },
              }}
            >
              {table.heading}
            </Typography>
          )}
          {table.intro && <Typography sx={copy}>{table.intro}</Typography>}
        </Box>
      )}
      <Card
        label={`${name} ${table.heading ?? table.columns.join(" and ")}`}
        columns={table.columns}
        rows={table.rows}
      />
      {table.note && <Typography sx={copy}>{table.note}</Typography>}
    </Box>
  );
}
