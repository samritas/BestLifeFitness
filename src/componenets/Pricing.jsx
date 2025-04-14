import React from "react";
import { Box, Typography, Card, CardContent, Divider, Grid } from "@mui/material";

const Pricing = () => {
  const plans = [
    {
      title: "ベストライフ40",
      subtitle: "すべて 5,300円（税別）",
      items: [
        {
          name: "運動20分 + ストレッチ20分",
          description: "運動習慣をつけたい方におすすめ",
          price: "¥5,300",
        },
        {
          name: "ストレッチ40分",
          description: "肩こり・腰痛にお悩みの方におすすめ",
          price: "¥5,300",
        },
        {
          name: "運動40分",
          description: "筋肉をつけたい方、ダイエットしたい方におすすめ",
          price: "¥5,300",
        },
      ],
    },
    {
      title: "マットピラティス",
      subtitle: "5,300円（税別）",
      items: [
        {
          description: "対象:",
          details: [
            "体幹に自信のない方",
            "姿勢が気になる方",
            "ストレートネックが気になる方",
            "肩こり・腰痛にお悩みの方"
          ]
        }
      ],
    },
    {
      title: "加圧トレーニング",
      items: [
        {
          name: "加圧のみ",
          price: "5,000円（税別）",
          trial: "初回体験：500円",
        },
        {
          name: "加圧 + ストレッチ",
          price: "8,000円（税別）",
        },
        {
          description: "対象:",
          details: [
            "忙しい方",
            "運動不足が気になる方",
            "ダイエットしたい方"
          ]
        }
      ],
    },
  ];

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
          fontSize: { xs: "1.5rem", md: "2.5rem" },
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
            fontSize: { xs: "1.2rem", md: "1.5rem" },
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
                <Typography variant="h5" fontWeight="bold">
                  {plan.title}
                </Typography>
                {plan.subtitle && (
                  <Typography variant="subtitle1">
                    {plan.subtitle}
                  </Typography>
                )}
              </Box>
              
              <CardContent sx={{ flexGrow: 1 }}>
                {plan.items.map((item, itemIndex) => (
                  <Box key={itemIndex} sx={{ mb: 3 }}>
                    {item.name && (
                      <Typography variant="h6" fontWeight="bold" color="#E37503">
                        {item.name}
                      </Typography>
                    )}
                    
                    {item.price && (
                      <Typography variant="h5" fontWeight="bold" color="#E37503" sx={{ mt: 1 }}>
                        {item.price}
                      </Typography>
                    )}
                    
                    {item.trial && (
                      <Typography variant="body2" color="#E37503" sx={{ fontStyle: 'italic' }}>
                        {item.trial}
                      </Typography>
                    )}
                    
                    {item.description && (
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {item.description}
                      </Typography>
                    )}
                    
                    {item.details && (
                      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                        {item.details.map((detail, detailIndex) => (
                          <Typography component="li" variant="body2" key={detailIndex}>
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