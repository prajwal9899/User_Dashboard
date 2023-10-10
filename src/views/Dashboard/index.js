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


const Default = () => {
  const theme = useTheme();
  const { user } = useSelector((state) => state.user);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="$30200"
              secondary="All Earnings"
              color={theme.palette.warning.main}
              footerData="10% changes on profit"
              iconPrimary={MonetizationOnTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="145"
              secondary="Task"
              color={theme.palette.error.main}
              footerData="28% task performance"
              iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="290+"
              secondary="Page Views"
              color={theme.palette.success.main}
              footerData="10k daily views"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="500"
              secondary="Downloads"
              color={theme.palette.primary.main}
              footerData="1k download in App store"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="$30200"
              secondary="All Earnings"
              color={theme.palette.warning.main}
              footerData="10% changes on profit"
              iconPrimary={MonetizationOnTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="145"
              secondary="Task"
              color={theme.palette.error.main}
              footerData="28% task performance"
              iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="290+"
              secondary="Page Views"
              color={theme.palette.success.main}
              footerData="10k daily views"
              iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="500"
              secondary="Downloads"
              color={theme.palette.primary.main}
              footerData="1k download in App store"
              iconPrimary={ThumbUpAltTwoTone}
            // iconFooter={TrendingUpIcon}
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
                    Traffic Sources
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Direct</Typography>
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
                        <Typography variant="body2">Social</Typography>
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
                        <Typography variant="body2">Referral</Typography>
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
                        <Typography variant="body2">Bounce</Typography>
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
                  <Grid item xs={12}>
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
