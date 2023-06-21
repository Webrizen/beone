import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
const InstructionsData = ({ data }) => {
    const formattedDate = (data) => {
        const date = new Date(data);
        return date.toLocaleString();
    }
    return (
        <><Box
            sx={{
                p: 2,
                background: "#f5f5f5",
                borderRadius: "4px",
                border: "1px solid #ccc",
            }}
        >
            <Typography variant="body1" gutterBottom>
                Testing instructions data
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Hormone preparation confirmation date:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">
                                {formattedDate(data.StandardPackageHormonePrep__customerConfirmationDate)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Metabolic preparation confirmation Date:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">
                                {formattedDate(data.StandardPackageHormonePrep__customerConfirmationDate)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Hormone sample collect confirmation date:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">
                                {formattedDate(data.StandardPackageHormonePrep__customerConfirmationDate)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Metabolic sample collect confirmation date:
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1" align="right">
                                {formattedDate(data.StandardPackageHormonePrep__customerConfirmationDate)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <div
                    className="two-col-kit"
                    style={{
                        color: "lightgray",
                        width: "100%",
                    }}
                >
                    <div className="left-data-kit">
                        <Typography variant="body1">Completed At:</Typography>
                        <Typography variant="body1">Thursday, June 8th, 2023</Typography>
                    </div>

                    <div className="right-data-kit">
                        <Typography variant="body1">Completed In:</Typography>
                        <Typography variant="body1">3 days</Typography>
                    </div>
                </div>
            </Grid>
        </Box></>
    )
}

export default InstructionsData