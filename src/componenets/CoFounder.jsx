import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import founder from '../assets/trainer.jpg';

const RoundedImage = styled('img')({
    width: '205px',
    height: '250px',
    borderRadius: '5%',
    objectFit: 'cover',
});

const CoFounder = () => {
    return (
        <Box sx={{ padding: 8 }}>
            <Typography variant="h5" sx={{ color: '#E87F11', fontWeight: 'bold', marginBottom: 1, fontSize: { xs: '1.75rem', md: '2rem' } }}>トレーナー紹介</Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                    <RoundedImage src={founder} alt="Co-founder" />
                </Box>
                <Box flex={1} display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" padding={2}>
                    <Typography variant="h5" sx={{ color: '#E87F11', fontWeight: 'bold', marginBottom: 1, fontSize: { xs: '1.75rem', md: '2rem' } }}>君塚龍二</Typography>
                    <Typography variant="body1" sx={{ color: '#E87F11', fontSize: { xs: '1.25rem', md: '1.50rem' } }}>
                        ベストライフフィットネス代表 / パーソナルトレーナー
                        スポーツ分野を専門的に学び、ゴールドジムを運営するTHINKフィットネスで7年以上の指導経験を持つ。90歳近い高齢者からアスリートまで幅広い層に対応可能。
                        幼少期の困難な経験を経て、多くの人に健康を届けたいという思いでベストライフフィットネスを創設。講演やセミナーを通じて、健康促進と公平な社会を目指した活動も展開している。
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CoFounder;