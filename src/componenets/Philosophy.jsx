import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import service from '../assets/philosophy.jpg'

const RoundedImage = styled('img')({
    width: '350px', 
    maxWidth: '350px',
    height: '290px', 
    borderRadius: '5%', 
});

const Philosophy = () => {
    return (
        <Box sx={{   padding: 5 ,flexDirection: 'column', display: 'flex',justifyContent: 'center',
            alignItems: 'center',}}>
              <Box
               sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4, 
                justifyContent: 'center',
                alignItems: 'center', 
              
              }}
               >
                <Box
                flexGrow={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding={2}

            >
                <RoundedImage src={service} alt="Personal Gym" />
            </Box>
            <Box
                flexGrow={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: '#E87F11',
                        fontWeight: 'bold',
                        marginBottom: 1,
                        fontSize: {
                            xs: '1.75rem',
                            md: '2rem',
                          },
                    }}
                >
                    企業理念
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: '#E87F11', lineHeight: 1.6, fontSize: {
                        xs: '1rem',
                        md: '1.25rem',
                    }, }}
                >
                    50代・60代・70代でも健康でいるために
                    <br />
                    私たちは、年齢に関係なく適切な運動が健康を維持するうえで不可欠だと考えています。特に50代から70代にかけては、体力や筋力が自然と低下していくため、無理のない範囲で運動を始め、継続することが健康寿命を延ばす鍵となります。
                    <br />
                    <br />
                    生活習慣病やその他多くの病気の原因は、実は「運動不足」によることが少なくありません。運動を取り入れないことで、以下のような健康リスクが高まります：
                    <br />
                    - 筋力や体力の低下により、日常生活に支障が出る
                    <br />
                    - 血糖値や血圧の上昇など、生活習慣病のリスクが高まる
                    <br />
                    - 骨密度の減少による骨粗しょう症や転倒リスクの増加
                    <br/>
                    これらを防ぐためにも、適切な運動量を日常生活に取り入れることが重要です。
                    <br />無理なく始めて、続けられる運動習慣を
                </Typography>
            </Box>

            
        </Box>
        <Box
                
               
            >
                
                <Typography
                    variant="body1"
                    sx={{ color: '#E87F11', lineHeight: 1.6 ,marginTop: 3,fontSize: {
                        xs: '1rem',
                        md: '1.25rem',
                      },}}
                >
                    「もう歳だから無理だろう…」と思われるかもしれませんが、今からでも遅くありません。ベストライフフィットネスでは、50代から70代の方でも安心して取り組める運動プログラムを提案し、お客様一人ひとりに寄り添ったサポートを行っています。
いきなり激しい運動をする必要はありません。優しいストレッチや体に負担をかけないトレーニングから始め、少しずつ続けていくことで、生活習慣病の予防だけでなく、日常生活がより快適になり、心身ともに健康を維持できます。
ベストライフフィットネスでは、「今からでも始められる」「無理なく続けられる」を大切に、運動習慣の定着を全力でサポートします。一緒に健康的な未来を作っていきましょう！
                </Typography>
            </Box>
        </Box>
      
    );
};

export default Philosophy;
