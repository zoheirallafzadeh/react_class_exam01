import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

type khadamatType = {
    svg: JSX.Element;
    titel: string;
    matn: string;
};
export default function Kedmat(props: khadamatType) {
    return (
        // <Grid xs={6}>
            <Grid container spacing={2} alignItems="flex-start">
                <Grid xs={2.5}>{props.svg}</Grid>
                <Grid xs={9}>
                    <Stack>
                        
                            <Typography variant="h6" color="initial"  m={2}>
                                {props.titel}
                            </Typography>
                     

                        <Typography variant="caption" color="initial" m={2} textAlign='justify'>
                            {props.matn}
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        // </Grid>
    );
}
