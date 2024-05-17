import FlexBetween from '../layouts/FlexBetween'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { EditOutlined } from "@mui/icons-material"
import { LinkedIn, Facebook } from "@mui/icons-material"

const SocialLinksWidget = ({ fb=null,linkedin=null }) => {

    const { palette } = useTheme()
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    let platformIcon;
    // switch (platform) {
    //     case 'LinkedIn':
    //         platformIcon = <LinkedIn sx={{height:'30px', width:'30px'}} />;
    //         break;
    //     case 'Facebook':
    //         platformIcon = <Facebook sx={{height:'30px', width:'30px'}} />;
    //         break;
    //     default:
    //         platformIcon = null;
    // }
    // const containsFacebook = link && link.toLowerCase().includes('facebook');
    // const containsLinkedIn = link && link.toLowerCase().includes('linkedin');



    return (
        <FlexBetween gap="1rem" mb="0.5rem">
            <FlexBetween gap="1rem">
                {platformIcon}
                <Box>
                    {
                        <>
                        {fb ? (
                            <>
                                <Typography color={main} fontWeight={"500"}>
                                    {'facebook' }
                                </Typography>
                                <Typography color={medium}>{fb}</Typography>
                            </>

                        ):(
                            null
                        )}
                        {linkedin ? (
                            <>
                                <Typography color={main} fontWeight={"500"}>
                                    {'linkedin' }
                                </Typography>
                                <Typography color={medium}>{linkedin}</Typography>
                            </>

                        ):(
                            null
                        )}
            
                
                        </>
                    }
                </Box>
            </FlexBetween>
                
        </FlexBetween>
    )
}

export default SocialLinksWidget