import { Box, Typography } from '@mui/material'
import React from 'react'
import FlexBetween from '../layouts/FlexBetween'
import { useTheme } from '@emotion/react'

const Activity = ({activityId,userId,discription,date}) => {
    
    const {palette}=useTheme()
    const dark = palette.primary.dark;
    const Default = palette.background.default;
    const main = palette.neutral.main;

  return (
    <Box 
        bgcolor={Default}
        padding={'10px'}
        sx={{
            borderRadius: '5px',
            mr: '5px',
        }}
    >
        <FlexBetween>
            <Typography 
                color={main}
                fontSize={'18px'}    
            >
                {discription.length > 50 ? discription.slice(0, 50) + '...' : discription}
            </Typography>
            <Typography
                color={dark}
                fontSize={'18px'}    
            >
                {date}
            </Typography>
        </FlexBetween>
    </Box>
  )
}

export default Activity