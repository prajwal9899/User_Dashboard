/* eslint-disable no-unused-vars */
import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress } from '@mui/material';

//project import
import { useSelector } from 'react-redux';
import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import GppMaybeTwoToneIcon from '@mui/icons-material/GppMaybeTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PersonRemoveTwoToneIcon from '@mui/icons-material/PersonRemoveTwoTone';


const Default = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.user);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="&#x20B9;30200"
              secondary="Total Loan Amount"
              color={theme.palette.success.main}
              footerData="10% changes on profit"
              iconPrimary={MonetizationOnTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="&#x20B9;44145"
              secondary="Outstanding Balance"
              color={theme.palette.error.main}
              footerData="28% task performance"
              iconPrimary={AccountBalanceWalletTwoToneIcon}
            // iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="&#x20B9;290545"
              secondary="Secured Amount"
              color={theme.palette.success.main}
              footerData="10k daily views"
              iconPrimary={ShieldTwoToneIcon}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="&#x20B9;290881"
              secondary="Non-Secured Amount"
              color={theme.palette.warning.main}
              footerData="10k daily views"
              iconPrimary={GppMaybeTwoToneIcon}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="30200"
              secondary="Total No. of Accounts"
              color={theme.palette.warning.main}
              footerData="10% changes on profit"
              iconPrimary={AccountBalanceTwoToneIcon}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12}>
            <ReportCard
              primary="145"
              secondary="Total No. of Defaulters"
              color={theme.palette.error.main}
              footerData="28% task performance"
              iconPrimary={PersonRemoveTwoToneIcon}
            // iconFooter={TrendingDownIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <RevenuChartCard chartData={RevenuChartCardData} />
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Resources Analytics
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Defaulters</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          80%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="direct" value={80} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Secured Amount</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          50%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Social" value={50} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Non-Secured Amount</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          20%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Referral" value={20} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Outstanding Balance</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          60%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Bounce" value={60} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} style={{visibility:"hidden"}}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Internet</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
