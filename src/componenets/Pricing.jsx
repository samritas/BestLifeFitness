import React from "react";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

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
            height: {lg:315, xs: 360, sm: 360 }, // Adjusted height on small screens
            borderRadius: 2,
            background: "#FFF",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{ color: "#E37503", fontSize: { xs: "1.25rem", md: "1.50rem" } }}
            >
              \ 地域最安値 /
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#E37503", fontSize: {  xs: "1.25rem", md: "1.50rem"  } }}
            >
             ベストライフ40
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#E37503", fontSize: {  xs: "1.25rem", md: "1.50rem"  } }}
            >
          20分ストレッチ
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#E37503", fontSize: { xs: "1.25rem", md: "1.50rem" } }}
            >
          20分運動
            </Typography>
          </CardContent>
        </Card>
                <Card
                elevation={6}
                sx={{
                  width: { xs: "100%", sm: 320 }, // Increased width on small screens
                  borderRadius: 2,
                  background: "#FFF",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              >
                
                <CardContent >
                {group.plans.map((plan, idx) => (
                  
                    <React.Fragment key={idx}>
                       {plan.recommended && (
                        <Box sx={{ color: "#E37503" ,  bgcolor: "#E37503",textAlign: "center", gap: 2,fontSize: { xs: "1rem", md: "1.5rem" } }}>
                            <Typography
                        sx={{
                         
                          color: "white",
                          width: "100%",
                          textAlign: "center",
                          py: 0.5,
                          fontWeight: "bold",
                          borderRadius: "4px 4px 0 0",
                          mb: 1,
                          fontSize: { xs: "0.75rem", md: "1rem" },
                          textAlign: "center",
                        }}
                        variant="caption"
                      >
                        オススメ
                      </Typography>
                        </Box>
                    
                    )}
                      <Box sx={{ color: "#E37503" , textAlign: "center", gap: 2 }}>
                        
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.5rem" } }}
                        >
                          {plan.label}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{ fontWeight: "bold", color: "#E37503", fontSize: { xs: "1.75rem", md: "2.5rem" } }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#E37503", fontSize: { xs: "1rem", md: "1.5rem" } }}>
                          {plan.details}
                        </Typography>
                      </Box>
                      {idx < additionalPlans.length - 1 && <Divider sx={{ bgcolor: "#E37503", height: "2px" }} />}
                    </React.Fragment>
                  ))}
                </CardContent>
              </Card>
             
             
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
            width: { xs: "100%", sm: 320 }, // Increased width on small screens
            height: {lg:315, xs: 360, sm: 360 },
            borderRadius: 2,
            background: "#FFF",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#E37503", fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              その他サービス
            </Typography>
          </CardContent>
        </Card>

        <Card
          elevation={6}
          sx={{
            width: { xs: "100%", sm: 320 }, // Increased width on small screens
            borderRadius: 2,
            background: "#FFF",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <CardContent sx={{ textAlign: "center", gap: 2 }}>
            {additionalPlans.map((plan, idx) => (
              <React.Fragment key={idx}>
                <Box sx={{ color: "#E37503" }}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", fontSize: { xs: "1rem", md: "1.5rem" } }}
                  >
                    {plan.label}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", color: "#E37503", fontSize: { xs: "1.75rem", md: "2.5rem" } }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#E37503", fontSize: { xs: "1rem", md: "1.5rem" } }}>
                    {plan.details}
                  </Typography>
                </Box>
                {idx < additionalPlans.length - 1 && <Divider sx={{ bgcolor: "#E37503", height: "2px" }} />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Pricing;