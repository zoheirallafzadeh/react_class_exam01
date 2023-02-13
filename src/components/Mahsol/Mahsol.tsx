import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type mahsol = {
    img: string;
    name: string;
};
export type mahsolatType = {
    mahsolat: mahsol;
};

export default function Mahsol(props: mahsolatType) {
    return (
        <Stack m={2} sx={{ alignItems:'center' }}>
            <Box marginBottom={3} sx={{ display: "flex", border: "1px solid #ccc", p: 4 , justifyContent:'center' , width:'100%'}}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                        style={{ height: "150px" , maxWidth:'95%' }}
                        src={`${props.mahsolat.img}?w=150pxh=100&fit=crop&auto=format`}
                        alt={props.mahsolat.name}
                    />
                </Box>
            </Box>
            <Typography>{props.mahsolat.name}</Typography>
        </Stack>
    );
}
