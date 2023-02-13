import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type newType = {
    img: string;
    t1: string;
    t2: string;
    t3: string;
};
export default function New(props:newType) {
    return (
        <Box width={1}  >
            <Stack>
                <Box height={'248px'} >
                    <img  style={{height:'248px' , objectFit: 'cover' , width:'100%'}}   src={props.img} alt={props.t1} />
                </Box>
                <Box>
                    <Typography textAlign={'center'} variant="caption" >{props.t1}</Typography>
                </Box>
                <Box>
                    <Typography textAlign={'center'} variant="caption" >{props.t2}</Typography>
                </Box>
                <Box>
                    <Typography textAlign={'center'} variant="caption" >{props.t3}</Typography>
                </Box>
            </Stack>
        </Box>
    );
}
