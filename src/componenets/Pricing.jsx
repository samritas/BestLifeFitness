import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Pricing = () => {
  const plans = [
    {
      title: "ベストライフ40",
      plans: [
        {
          label: "￥ 3000円お得 /",
          price: "￥40,000",
          details: "税込・10回分",
          recommended: true,
        },
        {
          label: "￥ 地域最安値 /",
          price: "￥4,300",
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
          mb: 2,
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
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#E37503" }}>
              {group.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 3,
                alignItems: "center",
              }}
            >
              {group.plans.map((plan, idx) => (
                <Card
                  key={idx}
                  elevation={6}
                  sx={{
                    width: { xs: "90%", sm: 280 },
                    height: 200,
                    borderRadius: 2,
                    background: "#FFF",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      color: "#E37503",
                      gap: 1,
                    }}
                  >
                    {plan.recommended && (
                      <Typography
                        sx={{
                          bgcolor: "#E37503",
                          color: "white",
                          width: "100%",
                          textAlign: "center",
                          py: 0.5,
                          fontWeight: "bold",
                          borderRadius: "4px 4px 0 0",
                          mb: 1,
                        }}
                        variant="caption"
                      >
                        オススメ
                      </Typography>
                    )}
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {plan.label}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E37503" }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "black" }}>
                      {plan.details}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {benefits.map((text, idx) => (
                <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, backgroundColor: "#E37503", borderRadius: "2px" }} />
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: "#E37503" }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
            </Box>

           
          
          </Box>
        ))}
      </Box>

      {/* Additional Plans */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 6 },
          alignItems: "center",
        }}
      >
        <Card
          elevation={6}
          sx={{
            width: { xs: "90%", sm: 280 },
            height: 200,
            borderRadius: 2,
            background: "#FFF",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              padding: 2,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#E37503" }}>
              その他サービス
            </Typography>
          </CardContent>
        </Card>

        {additionalPlans.map((plan, idx) => (
          <Card
            key={idx}
            elevation={6}
            sx={{
              width: { xs: "90%", sm: 280 },
              height: 200,
              borderRadius: 2,
              background: "#FFF",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
                color: "#E37503",
                gap: 1,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {plan.label}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "#E37503" }}>
                {plan.price}
              </Typography>
              <Typography variant="body1" sx={{ color: "black" }}>
                {plan.details}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
