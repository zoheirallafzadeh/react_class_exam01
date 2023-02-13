import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CustomSlider from "../../../components/CustomSlider";
import New from "./New";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function News() {
    const akhbar = [
        {
            img: "https://isaco.ir/sImage/news/561/2184.jpg",
            t1: "کنترل ویژه قبل از تحویل هایما و سورن پلاس در نمایندگی‌های خدمات پس از فروش ایران‌خودرو",
            t2: "1401/10/13",
            t3: "شرکت خدمات پس از فروش ایران‌خودرو اعلام کرد در راستای افزایش کیفیت محصولات ایران‌خودرو همزمان با طرح تحول کیفی، خودروهای خانواده هایما مشمول بسته‌های تشویقی و جبرانی شد.",
        },
        {
            img: "https://isaco.ir/sImage/news/562/2189.jpg",
            t1: "هشدار ایساکو در خصوص عرضه قطعات تقلبی در سامانه‌های فروش اینترنتی",
            t2: "1401/10/07",
            t3: "شرکت خدمات پس از فروش ایران‌خودرو نسبت به فروش قطعات تقلبی در سامانه‌های معتبر فروش اینترنتی کشور به هموطنان هشدار داد.",
        },
        {
            img: "https://isaco.ir/sImage/news/541/2161.jpg",
            t1: "آغاز چهاردهمین آزمون سراسری حوزه خدمات پس از فروش ایران خودرو",
            t2: "1401/10/03",
            t3: "گسترده‌ترین آزمون مهارتی سراسری صنعت خودرو کشور در حوزه خدمات پس از فروش، بین پرسنل تمام نمایندگی‌های ایران‌خودرو آغاز شد.",
        },
    ];


    const setting2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <ArrowForwardIosIcon />,
  }
    return (
        <Stack width={0.9} m={5} >
            <Typography variant="h4" color="primary">
                آخــرین اخـــبار
            </Typography>
            <Box width={1} display='flex' justifyContent={'center'}>
                <Box width={0.9}>
                <CustomSlider {...setting2}>
                    
                    {akhbar.map((pe) => (
                        <New key={pe.t1}
                            img={pe.img}
                            t1={pe.t1}
                            t2={pe.t2}
                            t3={pe.t3}
                        ></New>
                    ))}
                </CustomSlider>
                </Box>
            </Box>
        </Stack>
    );
}
