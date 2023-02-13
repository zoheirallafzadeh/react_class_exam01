import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function KartTala() {
    return (
        <Box
            width={1}
            // height={""}
            sx={{
                background:
                    "url(https://isaco.ir/images/site/gold-card-background2.jpg) no-repeat 50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundSize: 'cover'
            }}
        >
            <Grid
                container
                spacing={3}
                direction="row"
                // justifyContent="flex-start"
                alignItems={'center'}
                justifyContent={'center'}
                m={15}
                wrap="wrap"
                width={0.8}

            >
                <Grid item xs={12} md={6} >
                    <Typography textAlign={'justify'} variant="caption" color="white">
                        همه می‌دانيم كه حادثه خبر نمی‌كند، شايد در يكی از ۸۰۰
                        هزار حادثه رانندگی كه سالانه در ايران اتفاق می‌افتد شما
                        هم متضرر شده باشيد. اما آيا راهی برای جبران این خسارات
                        وجود دارد؟ اگر سوار یکی از محصولات ایران خودرو هستید و
                        یا قصد خرید یکی از آنها را دارید، حتما این مطلب را
                        بخوانید. امدادخودروایران شركت زيرمجموعه گروه صنعتی ایران
                        خودرو، برای این گونه اتفاقات تمهیدات ویژه‌ای اندیشیده
                        است: خدمتی به نام كارت طلايی
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'}>
                    <img
                        style={{maxWidth:'100%' }}
                        src="https://isaco.ir/_next/static/media/gold-card-mouckup.2e064e78.jpg"
                        alt="aaa"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
