import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse, Avatar, Box, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import founder from "../assets/founder.jpg";

export default function Founder() {
  const [expanded, setExpanded] = useState(false);

  const RoundedImage = styled("img")({
    width: "205px",
    height: "250px",
    borderRadius: "5%",
    objectFit: "cover",
  });

  return (
    <Box sx={{ padding: 5, flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Typography variant="h6" sx={{ mb: 2, color: "#E87F11", textAlign: "left", fontSize: { xs: "1.75rem", md: "2rem" } }}>
        <strong>創業者紹介</strong>
      </Typography>
      <Box>
        <RoundedImage src={founder} alt="Co-founder" />
      </Box>
      <Typography variant="body1" sx={{ mt: 3, color: "#E87F11", textAlign: "left", fontSize: { xs: "1rem", md: "1.25rem" } }}>
        <strong>君塚 龍二（きみづか りゅうじ）</strong>
        <br />ベストライフフィットネス代表 / パーソナルトレーナー
        <br />
        <br /><strong>プロフィール</strong>
        <br />
        スポーツ・フィットネス分野を専門的に学んだ後、大手フィットネスクラブ「ゴールドジム」を運営するTHINKフィットネス株式会社に入社。7年以上にわたり、幅広い年齢層のお客様に運動指導を行ってきました。
        <br /><strong>指導実績</strong>
        <br />
        • 最高90歳近くの女性への運動指導
        <br />• 入院明けのリハビリテーションサポート
        <br />• オリンピック候補生やスポーツチームの指導
        <br />• 子どもの発育を促す運動指導
        <br />• 初心者からアスリートまで幅広く対応
      </Typography>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <br /><Typography variant="body1" sx={{ mt: 3, color: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}>
          <strong>フィットネスに対する想い</strong>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}>
          幼少期に親や環境の影響でホームレス生活を経験し、その後約10年を児童養護施設で過ごしました。
          <br />
          「恩返しをしたい」という想いから、フィットネスを通じて多くの人に健康を届けることを決意。
          <br />
          講演会やスピーチを通じて、自身の体験を共有し、偏見をなくす活動を積極的に行っています。
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, color: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}>
          <strong>社会貢献活動とフィットネスの融合</strong>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}>
          「通っていただく全てのお客様に正しいフィットネスを届けること」の重要性を実感。
          <br />
          運動習慣がない方や中高齢者が安心して通えるパーソナルジム「ベストライフフィットネス」を立ち上げました。
        </Typography>
        <br /><Typography variant="body1" sx={{ mt: 3, color: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}>
          <strong>メッセージ</strong>
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}>
          「運動は誰にでも始められ、人生をより豊かにしてくれるものです。正しいフィットネスを学び、運動を通じて幸せな未来を創りましょう。」
        </Typography>
      </Collapse>
      <Button
        variant="contained"
        endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => setExpanded(!expanded)}
        sx={{ mt: 2, bgcolor: "#E87F11", fontSize: { xs: "1rem", md: "1.25rem" } }}
      >
        {expanded ? "閉じる" : "もっと見る"}
      </Button>
    </Box>
  );
}
