import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Stack, Typography } from "@mui/material";


export type karhaType = {
    mySvg: string;
    myBac: string;
    myTitle: string;
    myMatn: string;
    variant: "contained" | "outlined" | "text";
};
export default function Karha({
    mySvg,
    myTitle,
    myMatn,
    myBac,
    variant,
}: karhaType) {
    let rangKoli = {};
    let rangMatn = "Background";
    if (variant === "text") {
        rangKoli = {
            borderBottom: " 2px solid #fff",
            "&:hover": { borderBottom: " 2px solid #21376c" },
            backgroundImage: { myBac },
            borderRadius: "0px",
            // mr: 2,
            // ml: 2,
            m: 2,
        };
        rangMatn = "primary";
    } else {
        rangKoli = {
            borderBottom: " 2px solid #21376c",
            borderRadius: "0px",
            "&:hover": { borderBottom: " 2px solid #fff" },
            // mr: 2,
            // ml: 2,
            m: 2,
        };
        rangMatn = "Background";
    }

    return (
        <Button variant={variant} size={"small"} sx={rangKoli} >
            {/* <Button
                sx={{ backgroundImage: { myBac }, borderRadius: "0" }}
            ></Button> */}
            <Box
                sx={{
                    width: "100%",
                    backgroundImage: `url(${myBac})`,
                    backgroundPosition: "0%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto 90%",
                    display: "flex",
                    justifyContent: "center",

                    padding: 2,
                    height: "193px",
                    // zIndex: "100px",



                }}
            >
                <Grid container spacing={1} direction="row">
                    <Grid
                        xs={8}
                        sx={{ justifyContent: "center", display: "flex" }}
                    >
                        <Stack
                            justifyContent={"center"}
                            alignContent={"space-around"}
                            sx={{ alignItems: "flex-start", mr: 8 }}
                        >
                            <Typography
                                variant="caption"
                                color={rangMatn}
                                textAlign="left"
                            >
                                {myMatn}
                            </Typography>
                            <Typography
                                variant="h5"
                                color={rangMatn}
                                textAlign="left"
                                fontWeight={'bold'}
                            >
                                {myTitle}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid xs={4} display='flex' alignItems={'center'}>
                        <Box>
                            <img
                                style={{ maxWidth: "100%" }}
                                src={mySvg}
                                alt={myTitle}
                            ></img>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Button>
    );
}
