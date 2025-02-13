import React from "react";
import { Box, Typography, Paper, Link } from "@mui/material";

const Access = () => {
  return (
    <Box
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ flex: 1, p: 2, width: "100%" }}>
        <Box sx={{ mb: 4 }}>
          <iframe
            title="Google Map 2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1748881086936!2d139.92344451516215!3d35.72074208019262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601886da90dfbb67%3A0x3a70028e6f4858c3!2z44Kw44Oq44O844Oz44K_44O844OV5Y2X5YWr5bmh!5e0!3m2!1sen!2sau!4v1617624632536!5m2!1sen!2sau"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>

        <Box sx={{ mb: 4 }}>
          <iframe
            title="Google Map 2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.1860033169985!2d139.92833801516153!3d35.70036158019239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601886da90dfbb67%3A0x3a70028e6f4858c3!2z5p2x5Lqs5ZOB44Kq44Kk44Oz44Kw44Oq44O844Oz44K_44O844OV5Y2X5YWr5bmh!5e0!3m2!1sen!2sjp!4v1700000000000!5m2!1sen!2sjp"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>

        <Box>
          <iframe
            title="Google Map 2"
            src=""
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Box>

      <Box
        sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4, p: 2 }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "#E87F11",
            fontWeight: "bold",
            marginBottom: 2,
            fontSize: { xs: "1.5rem", md: "1.75rem" },
          }}
        >
          アクセス
        </Typography>

        <Paper sx={{ p: 3, boxShadow: 3, borderRadius: "8px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#E87F11",
              fontWeight: "bold",
              marginBottom: 1,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            住所
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E87F11",
              fontSize: { xs: "1.25rem", md: "1.50rem" },
            }}
          >
            千葉県市川市南八幡4-4-22 グリーンターフ南八幡1階
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, boxShadow: 3, borderRadius: "8px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#E87F11",
              fontWeight: "bold",
              marginBottom: 1,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            最寄駅
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#E87F11",
              fontSize: { xs: "1.25rem", md: "1.50rem" },
            }}
          >
            本八幡駅 – 徒歩2分
          </Typography>
        </Paper>

        <Paper sx={{ p: 3, boxShadow: 3, borderRadius: "8px" }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#E87F11",
              fontWeight: "bold",
              marginBottom: 1,
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            最寄りの駐車場
          </Typography>
          <Link
            href="https://maps.app.goo.gl/r9JmzWB3QdMSFZkw6"
            target="_blank"
            rel="noopener"
            sx={{
              color: "#E87F11",
              fontSize: { xs: "1.25rem", md: "1.50rem" },
              textDecoration: "underline",
            }}
          >
            駐車場の地図はこちら
          </Link>
        </Paper>
      </Box>
    </Box>
  );
};

export default Access;
