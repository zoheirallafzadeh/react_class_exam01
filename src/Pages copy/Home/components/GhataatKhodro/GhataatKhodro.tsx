import { Box, LinearProgress, Link, Stack, Typography } from "@mui/material";
import React from "react";
import CustomSlider from "../../../../components/CustomSlider";
import Mahsol from "../../../../components/Mahsol";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const mahsolat = [
    {
        img: "https://isaco.ir/sImage/parts/images/16201/thumbnail/224.jpg",
        name: "لنت ترمز",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/06904/thumbnail/1647704423.jpg",
        name: "آلترناتور ۹۰ آمپر",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/06504/thumbnail/1647709988.jpg",
        name: "دنده‌ی کیلومتر شمار گیربکس",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/06005/thumbnail/304.jpg",
        name: "درب موتور",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/07702/thumbnail/322.jpg",
        name: "روغن موتور",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/03706/thumbnail/267.jpg",
        name: "پوسته‌ی آب",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/11601/thumbnail/277.jpg",
        name: "غلتک تسمه سفت کن",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/07708/thumbnail/320.jpg",
        name: "ضد یخ",
    },
    {
        img: "https://isaco.ir/sImage/parts/images/03601/thumbnail/315.jpg",
        name: "پمپ روغن",
    },
    // ,
    // {
    //   img:'',
    //   name:''
    // }
];

export default function GhataatKhodro() {
    const setting2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <ArrowForwardIosIcon />,
    };
    return (
        <Stack width={1} alignItems={"center"}>
            <Typography
                textAlign={"center"}
                variant="h4"
                color="primary"
                mt={15}
                m={5}
                fontWeight={"bold"}
            >
                قـــطعــات خـــودرو
            </Typography>
            <Typography
            width={'80%'}
                textAlign={"center"}
                variant="caption"
                display={"block"}
            >
                در راستای بهبود فرآیند خدمت‌ رسانی و همچنین ارتقاء سطح خدمات پس
                از فروش و جلب رضایت مشتریان محترم گروه صنعتی ایران خودرو٬ امکان
                جستجوی قطعات خودرو و مشاهده قیمت آنها در صفحه قطعات فرآهم گردیده
                است ، شما می‌توانید با ورود به صفحه قطعات لیست تمام قطعات موجود
                شرکت ایساکو را مشاهده نمایید.
            </Typography>
            <Box width={1} maxWidth={"1300px"}>
                <CustomSlider {...setting2}>
                    {mahsolat.map((pe) => (
                        <Mahsol mahsolat={pe}></Mahsol>
                    ))}
                </CustomSlider>
            </Box>
            <Link m={25}>
                <Typography variant="h5">نمایش همه</Typography>
            </Link>
        </Stack>
    );
}
