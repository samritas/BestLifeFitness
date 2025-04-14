import React from "react";
import { Box, Typography, Card, CardContent, Divider, Grid } from "@mui/material";
import { plans } from "../data/price";

const Pricing = () => {
  return (
    <Box
      sx={{
        padding: { xs: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
        alignItems: "center",
        minHeight: "10vh",
        backgroundColor: "#FFF9F2",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#E37503",
          textAlign: "center",
          mb: 0,
          fontSize: { xs: "1.75rem", md: "2rem" },
        }}
      >
        料金プラン
      </Typography>

      {/* Campaign Banner */}
      <Box
        sx={{
          backgroundColor: "#FFF6EB",
          border: "1px solid #F2A45C",
          borderRadius: 2,
          padding: 2,
          width: "100%",
          maxWidth: 800,
          textAlign: "center",
          mt: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "#E37503",
            lineHeight: 1.8,
          }}
        >
          入会金5,500円 → キャンペーン中のため無料<br />
          先着30名様限定
        </Typography>
      </Box>

      {/* Pricing Plans */}
      <Grid container spacing={4} sx={{ maxWidth: 1200, mt: 2 }}>
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 2,
                border: "1px solid #F2A45C",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#E37503",
                  color: "white",
                  textAlign: "center",
                  py: 2,
                  px: 1,
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "white" }}
                >
                  {plan.title}
                </Typography>
                {plan.subtitle && (
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" }, color: "white" }}
                  >
                    {plan.subtitle}
                  </Typography>
                )}
              </Box>

              <CardContent sx={{ flexGrow: 1 }}>
                {plan.items.map((item, itemIndex) => (
                  <Box key={itemIndex} sx={{ mb: 3 }}>
                    {item.name && (
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#E37503", fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                      >
                        {item.name}
                      </Typography>
                    )}

                    {item.price && (
                      <Typography
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mt: 1, color: "#E37503", fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                      >
                        {item.price}
                      </Typography>
                    )}

                    {item.trial && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontStyle: "italic",
                          color: "#E37503",
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {item.trial}
                      </Typography>
                    )}

                    {item.description && (
                      <Typography
                        variant="body1"
                        sx={{
                          mt: 1,
                          color: "#E37503",
                          fontSize: { xs: "1.25rem", md: "1.5rem" },
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}

                    {item.details && (
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {item.details.map((detail, detailIndex) => (
                          <Typography
                            component="li"
                            variant="body2"
                            key={detailIndex}
                            sx={{ color: "#E37503", fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </Box>
                    )}

                    {itemIndex < plan.items.length - 1 && (
                      <Divider sx={{ bgcolor: "#F2A45C", my: 2 }} />
                    )}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
