import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Pricing = () => {
  return (
    <Box
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        bgcolor: "#E37503",
        alignItems: "center",
        minHeight: "10vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "white", textAlign: "center", mb: 4 }}
      >
        料金
      </Typography>

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
        {[
          {
            title: "ベストライフ40",
            plans: [
              {
                label: "\\ 3000円お得 /",
                price: "￥40,000",
                details: "税込・10回分",
                recommended: true,
              },
              {
                label: "\\ 地域最安値 /",
                price: "￥4,300",
                details: "税込・都度払い",
              },
            ],
          },
          {
            title: "その他サービス ベストライフ40",
            plans: [
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
            ],
          },
        ].map((group, index) => (
          <Box sx={{ display: 'flex', gap: 4 }}>
          {group.plans.map((plan, idx) => (
            <Card
              key={idx}
              elevation={6}
              sx={{
                width: 220,
                height: 200,
                borderRadius: 2,
                background: '#FFF',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                position: 'relative',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexGrow: 1,
                  color: '#E37503',
                  gap: 1,
                }}
              >
                {plan.recommended && (
                  <Typography
                    sx={{
                      bgcolor: '#E37503',
                      color: 'white',
                      width: '100%', // Full width of the card
                      textAlign: 'center',
                      py: 0.5,
                      fontWeight: 'bold',
                      borderRadius: '4px 4px 0 0', // Rounded top corners only
                      mb: 1, // Add margin at the bottom
                    }}
                    variant="caption"
                  >
                    オススメ
                  </Typography>
                )}
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {plan.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E37503' }}>
                  {plan.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'black' }}>
                  {plan.details}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        
        ))}
      </Box>
    </Box>
  );
};

export default Pricing;
