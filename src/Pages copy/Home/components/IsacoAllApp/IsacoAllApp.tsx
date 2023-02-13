import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function IsacoAllApp() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));
    const matches1200 = useMediaQuery("(min-width:1200px)");
    const matches1000 = useMediaQuery("(min-width:1000px)");
    const matches480 = useMediaQuery("(min-width:480px)");

    const isacoApps = [
        {
            title: "app-bazar",
            img: "https://isaco.ir/_next/static/media/app-bazarD.1af06ea6.jpg",
        },
        {
            title: "app-myket",
            img: "https://isaco.ir/_next/static/media/app-myketD.181d1c76.jpg",
        },
        {
            title: "app-google",
            img: "https://isaco.ir/_next/static/media/app-googleD.12c4607f.jpg",
        },
        {
            title: "app-site",
            img: "https://isaco.ir/_next/static/media/app-siteD.230feaa8.jpg",
        },
        {
            title: "app-web",
            img: "https://isaco.ir/_next/static/media/app-webD.47e7469e.jpg",
        },
        {
            title: "app-android",
            img: "https://isaco.ir/_next/static/media/app-androidD.aa05fb07.jpg",
        },
    ];
    let mobStyle = {};
    let boxMobStyle = {};
    let boxVasat = {};
    let boxImgsApp = {
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "start",
    };
    let hForB1 = "70%";
    if (matches1000) {
        mobStyle = {
            display: "block",
            width: "21%",
        };
        boxVasat = {
            width: "51%",
        };
        boxImgsApp = {
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "start",
        };
        hForB1 = "71%";
    } else if (matches480) {
        mobStyle = {
            display: "none",
        };
        boxVasat = {
            width: "80%",
        };
        boxImgsApp = {
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
        };
        hForB1 = "80%";
    } else {
        mobStyle = { display: "block", width: "60%" };
        boxMobStyle = {
            flexDirection: "column",
        };
        boxVasat = {
            width: "95%",
        };
        boxImgsApp = {
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
        };
        hForB1 = "81%";
    }
    let khat = {};
    if (matches1200) {
        khat = {
            // display:"flex",
        };
    } else {
        khat = {
            display: "none",
        };
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems={"center"}
            position="relative"
            width={1}
        >
            <Box
                display={"flex"}
                // maxWidth={"1300px"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={boxMobStyle}
            >
                <Box width={0.1}></Box>
                <Box sx={mobStyle}>
                    <img
                        style={{ width: "100%" }}
                        src="https://isaco.ir/_next/static/media/mobileApp_home.a160ab6a.png"
                        alt="app mobile"
                    />
                </Box>
                <Box sx={boxVasat}>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
                            <Typography
                                m={3}
                                mb={8}
                                variant="h5"
                                color="initial"
                            >
                                اپلیکیشن ایساکو را از مارکت های زیر دریافت کنید
                            </Typography>
                        </Grid>
                        <Grid xs={12}>
                            <Box
                                display={"flex"}
                                sx={boxImgsApp}
                                alignItems="center"
                                justifyContent={"center"}
                                flexDirection={"row"}
                            >
                                {isacoApps.map((pe) => (
                                    <Box
                                        key={pe.title}
                                        borderRadius={"7px"}
                                        sx={{ width: "fit-content" }}
                                    >
                                        <img src={pe.img} alt={pe.title} />
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box width={0.03} sx={khat}>
                    <img
                        style={{ width: "100%" }}
                        src="https://isaco.ir/_next/static/media/app03.592a0070.png"
                        alt="app mobile"
                    />
                </Box>
                <Box width={0.1}></Box>
            </Box>

            <Box
                position="absolute"
                top={"20%"}
                zIndex={-10}
                width={1}
                sx={{ backgroundColor: "#cad1dc" }}
                height={hForB1}
            ></Box>
            <Box
                position="absolute"
                top={"-10%"}
                zIndex={-11}
                width={1}
                sx={{ backgroundColor: "#f5f5f5" }}
                height={250}
            ></Box>
        </Box>
    );
}
