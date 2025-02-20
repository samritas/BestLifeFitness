import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

const Pricing = () => {
  const plans = [
    {
      title: "ベストライフ40",
      plans: [
        {
          label: " 3,000円お得 /10回券",
          price: "￥40,000",
          details: "税込・初期費用なし",
          recommended: true,
        },
        {
          label: "都度払い",
          price: "￥4,300 / 回",
          details: "税込・都度払い",
        },
      ],
    },
  ];

  const additionalPlans = [
    {
      label: "パーソナルストレッチ40分",
      price: "￥4,400",
      details: "税込・都度払い",
    },
    {
      label: "パーソナルトレーニング",
      price: "￥7,700",
      details: "税込・都度払い",
    },
  ];

  const benefits = ["地域最安値", "入会金無料", "その他初期費用なし"];

  return (
    <Box
      sx={{
        padding: { xs: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, md: 6 },
        alignItems: "center",
        minHeight: "10vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#E37503",
          textAlign: "center",
          mb: 0,
          fontSize: { xs: "1.5rem", md: "2.5rem" },
        }}
      >
        料金
      </Typography>

      {/* Pricing Plans */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        {plans.map((group, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#E37503",
                fontSize: { xs: "1.25rem", md: "2rem" },
              }}
            >
              {group.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
                color: "#E37503",
                alignItems: "center",
              }}
            >
              <Card
                elevation={6}
                sx={{
                  width: { xs: "100%", sm: 320 }, // Increased width on small screens
                  height: { lg: 308, xs: 250, sm: 308 }, // Adjusted height on small screens
                  borderRadius: 2,
                  background: "#FFF",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid  #F2A45C",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#E37503",
                      fontSize: { xs: "1.25rem", md: "1.70rem" },
                    }}
                  >
                    \ 地域最安値 /
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#E37503",
                      fontSize: { xs: "1.25rem", md: "1.70rem" },
                    }}
                  >
                    ベストライフ40
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#E37503",
                      fontSize: { xs: "1.25rem", md: "1.70rem" },
                    }}
                  >
                    20分ストレッチ
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "#E37503",
                      fontSize: { xs: "1.25rem", md: "1.70rem" },
                    }}
                  >
                    20分運動
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{
                  maxWidth: 300,
                  borderRadius: 2,
                  border: "1px solid  #F2A45C",
                  overflow: "hidden",
                  width: { xs: "100%", sm: 320 },
                  height: { lg: 308, xs: 250, sm: 310 },
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "orange",
                    color: "white",
                    textAlign: "center",
                    p: 1,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    オススメ
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,

                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {group.plans.map((plan, idx) => (
                    <Box key={idx}>
                      <Box
                        sx={{ color: "#E37503", textAlign: "center", gap: 2 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "1rem", md: "1.5rem" },
                          }}
                        >
                          {plan.label}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: "bold",
                            color: "#E37503",
                            fontSize: { xs: "1.75rem", md: "2.5rem" },
                          }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#F2A45C",
                            fontSize: { xs: "1rem", md: "1.25rem" },
                          }}
                        >
                          {plan.details}
                        </Typography>
                      </Box>
                      {idx < additionalPlans.length - 1 && (
                        <Divider sx={{ bgcolor: "#F2A45C", height: "2px" }} />
                      )}
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
