import { useState } from "react";
import { Card, CardContent, Typography, Button, Collapse, Avatar, Box, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import founder from '../assets/founder.jpg';


export default function Founder() {
  const [expanded, setExpanded] = useState(false);
  const RoundedImage = styled('img')({
    width: '205px',
    height: '250px',  
    borderRadius: '5%', 
});

  return (
    <Box  sx={{   padding: 5,flexDirection: 'column', display: 'flex',justifyContent: 'center',
        alignItems: 'center',}}>
            <Typography variant="h6" sx={{ mb: 2 ,color: '#E87F11', textAlign:'center'}}>
      <strong> 創業者紹介</strong>
      </Typography>
       <Box 
              
              >
                  <RoundedImage 
                      src={founder}
                      alt="Co-founder" 
                      
                  />
                
              </Box>
            
      
      
      

      <Typography variant="body1" sx={{ mt: 4,color: '#E87F11', }}>
      <strong>君塚 龍二（きみづか りゅうじ</strong>
        <br />
        ベストライフフィットネス代表 / パーソナルトレーナー
          <strong>プロフィール</strong>
          <br />
          スポーツ・フィットネス分野を専門的に学んだ後、大手フィットネスクラブ「ゴールドジム」を運営するTHINKフィットネス株式会社に入社。7年以上にわたり、幅広い年齢層のお客様に運動指導を行ってきました。
          <br/>
          <strong> 指導実績</strong>
          <br/>
           • 最高90歳近くの女性への運動指導
          <br/>
 • 入院明けのリハビリテーションサポート
<br/>
 • オリンピック候補生やスポーツチームの指導
<br/>
 • 子どもの発育を促す運動指導
<br/>
 • 老若男女を問わず、初心者からアスリートまで幅広く対応
<br/>
これまでの経験を通じて、一人ひとりの体力や目標に合わせた指導を心掛けてきました。
        </Typography>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Typography variant="body1" sx={{ mt: 2, color: '#E87F11' }}>
      <strong> 指導実績</strong>
</Typography>
<Typography variant="body1" sx={{ mt: 1 ,color: '#E87F11'}}>
  • 最高90歳近くの女性への運動指導
  <br />
  • 入院明けのリハビリテーションサポート
  <br />
  • オリンピック候補生やスポーツチームの指導
  <br />
  • 子どもの発育を促す運動指導
  <br />
  • 老若男女を問わず、初心者からアスリートまで幅広く対応
  <br />
  これまでの経験を通じて、一人ひとりの体力や目標に合わせた指導を心掛けてきました。
</Typography>

<Typography variant="body1" sx={{ mt: 3, color: '#E87F11' }}>
<strong> フィットネスに対する想い</strong>
</Typography>
<Typography variant="body1" sx={{ mt: 1,color: '#E87F11'}}>
  君塚龍二自身は、幼少期に親や環境の影響で数年間ホームレス生活を経験し、その後約10年を児童養護施設で過ごしました。
  <br />
  その中で学んだことは、「辛い経験」だけではなく、多くの人に助けられ支えられたことへの感謝です。その経験が君塚の価値観の基盤となり、「恩返しをしたい」という強い想いを育みました。
  <br />
  <br />
  「私ができる恩返しとは何か？」と考えた結果、たどり着いたのが、自身が学び続けてきたフィットネスを通じて、多くの人に健康を届けることでした。
  <br />
  <br />
  また、これまでの経験をもとに、不幸な環境で苦しむ子どもたちが生まれないようにするため、社会への発信も行っています。具体的には、講演会やスピーチを通じて、自身の体験を共有し、偏見をなくすための活動を積極的に行っています。
  また、法人向けセミナーを開催し、多様な視点から人々の意識を変える取り組みにも力を注いでいます。
</Typography>

<Typography variant="body1" sx={{ mt: 3, color: '#E87F11' }}>
<strong> 社会貢献活動とフィットネスの融合</strong>
</Typography>
<Typography variant="body1" sx={{ mt: 1 ,color: '#E87F11'}}>
  大手フィットネスクラブでの経験を通じて、「通っていただく全てのお客様に正しいフィットネスを届けること」の重要性を実感しました。しかし、現在の日本ではフィットネス人口は全体の5%にも満たないと言われています。
  <br />
  <br />
  そこで私は、「もっと多くの人に正しいフィットネスを届けたい」という想いから、運動習慣がない方や中高齢者が安心して通えるパーソナルジム「ベストライフフィットネス」を立ち上げました。
</Typography>

<Typography variant="body1" sx={{ mt: 3, color: '#E87F11' }}>
<strong>メッセージ</strong>
</Typography>
<Typography variant="body1" sx={{ mt: 1, color: '#E87F11' }}>
  「運動は誰にでも始められ、人生をより豊かにしてくれるものです。そして私自身の経験から、多くの人に健康と心の豊かさを届けることが、恩返しだと信じています。
  <br />
  正しいフィットネスを一緒に学び、運動を通じて幸せな未来を創りましょう。また、講演やセミナーを通じて、誰もが公平に生きられる社会を目指す活動も続けていきます。」
</Typography>

      </Collapse>

      <Button
        variant="contained"
        endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={() => setExpanded(!expanded)}
        sx={{ mt: 2 ,bgcolor:'#E87F11'}}
      >
        {expanded ? "閉じる" : "もっと見る"}
      </Button>
    </Box>
  );
}
