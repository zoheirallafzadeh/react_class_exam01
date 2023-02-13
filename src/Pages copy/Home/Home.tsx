import { Box,  Stack } from "@mui/material";
import React from "react";
import CustomSlider from "../../components/CustomSlider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Karha, { karhaType } from "../../components/Karha";
import png1 from "../../file/img/png/1.png";
import png2 from "../../file/img/png/2.png";
import png3 from "../../file/img/png/3.png";
import svg1 from "../../file/img/svg/1.png";
import svg2 from "../../file/img/svg/2.png";
import svg3 from "../../file/img/svg/3.png";
import GhataatKhodro from "./components/GhataatKhodro";
import IsacoAllApp from "./components/IsacoAllApp";
import Khadamat from "./components/Khadamat";
import Shomarande from "./components/Shomarande";
import Tamas from "./components/Tamas";
import Chera from "./components/Chera";
import KartTala from "./components/KartTala";
import News from "./News";
import Paziresh from "./components/Paziresh";

const karha: karhaType[] = [
    {
        mySvg: png1,
        myBac: svg1,
        myTitle: "استعلام گارانتی خودرو",
        myMatn: "استعلام رایگان گارانتی خودرو در سایت شرکت ایساکو",
        variant: "text",
    },
    {
        mySvg: png3,
        myBac: svg3,
        myTitle: "قطعات خودرو",
        myMatn: "قیمت و مشخصات فنی قطعات شرکت ایساکو",
        variant: "contained",
    },
    {
        mySvg: png2,
        myBac: svg2,
        myTitle: "نوبت دهی",
        myMatn: "نوبت دهی خدمات در سایت شرکت ایساکو",
        variant: "text",
    },
];
export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowForwardIosIcon />,
    };

    return (
        <Stack
            spacing={5}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ width: "95%" }}
        >
            <Box width={1} >
                <CustomSlider isResponsive={false} {...settings}>
                    <img
                        src="https://isaco.ir/sImage/slides/117.jpg"
                        alt="as"
                    />
                    <img
                        src="https://isaco.ir/sImage/slides/1582.png"
                        alt="as"
                    />
                    <img
                        src="https://isaco.ir/sImage/slides/1723.jpg"
                        alt="as"
                    />
                    <img
                        src="https://isaco.ir/sImage/slides/1522.jpg"
                        alt="as"
                    />
                </CustomSlider>
            </Box>

            <Box sx={{ maxWidth: "1300px", width: 1 }}>
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    {karha.map((pe) => (
                        <Grid xs={8} md={4}>
                            <Karha
                                mySvg={pe.mySvg}
                                myBac={pe.myBac}
                                myTitle={pe.myTitle}
                                myMatn={pe.myMatn}
                                variant={pe.variant}
                            ></Karha>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <GhataatKhodro />
            <IsacoAllApp />
            <Khadamat />
            <Shomarande />
            <Tamas />
            <Chera />
            <KartTala />
            <News />
            <Paziresh />
        </Stack>
    );
}
