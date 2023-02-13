import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Kedmat from "./component/Kedmat";
import AllKhadamat from "./component/AllKhadamat";

export default function Khadamat() {
   

    return (
        <Box width={0.8}>
            <Box mt={20}>
                <Grid
                    container
                    spacing={5}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    alignContent="stretch"
                    wrap="wrap"
                >
                    <Grid xs={12} order={{xs:1}}>
                        <Typography variant="h3" fontWeight={"bold"} mb={5}>
                            خـــدمــات مـــا
                        </Typography>
                    </Grid>
                    <Grid xs={12} sm={12} md={8} sx={{mb:15}} order={{xs:3 , md:2}}>

                        <AllKhadamat></AllKhadamat>
                    </Grid>
                    <Grid xs={12} sm={12} md={4} order={{xs:2 , md:3}}>
                        <Box mb={10}>
                            <img
                                style={{ width: "100%" }}
                                src="https://isaco.ir/_next/static/media/img-service.d3a16872.jpg"
                                alt="asda"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
