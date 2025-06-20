import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import * as selectors from "../store/selectors";

import { MenuSection } from "./MenuSection";
import { MenuItem } from "./MenuItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    paddingRight: theme.spacing(1)
  },
  unit: {
    flexShrink: 0,
    width: "2rem"
  }
}));

export const MenuMetrics = props => {
  const classes = useStyles();
  const best = useSelector(selectors.selectBestCostDisplay);
  const evaluating = useSelector(selectors.selectEvaluatingCostDisplay);
  const startedRunningAt = useSelector(selectors.selectStartedRunningAt);
  const [runningFor, setRunningFor] = useState(0);

  useEffect(() => {
    if (startedRunningAt) {
      const interval = setInterval(() => {
        const elapsed = Date.now() - startedRunningAt;
        const seconds = Math.floor(elapsed / 1000);
        const milliseconds = Math.floor((elapsed % 1000) / 10); // Get two decimal places
        setRunningFor(`${seconds}.${milliseconds.toString().padStart(2, "0")}`);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [startedRunningAt]);

  return (
    <MenuSection>
      <MenuItem row>
        <Grid item container justifyContent="space-between">
          <Typography
            display="inline"
            variant="button"
            color="textSecondary"
            component="div"
          >
            Current Best:{" "}
          </Typography>
          <Typography
            classes={{ root: classes.grow }}
            align="right"
            display="inline"
            variant="button"
          >
            {best || "0.00"}
          </Typography>
          <Typography
            classes={{ root: classes.unit }}
            align="right"
            display="inline"
            variant="button"
          >
            km
          </Typography>
        </Grid>
        <Grid item container justifyContent="space-between">
          <Typography
            display="inline"
            variant="button"
            color="textSecondary"
            component="div"
          >
            Evaluating:{" "}
          </Typography>
          <Typography
            classes={{ root: classes.grow }}
            align="right"
            display="inline"
            variant="button"
          >
            {evaluating || "0.00"}
          </Typography>
          <Typography
            classes={{ root: classes.unit }}
            align="right"
            display="inline"
            variant="button"
          >
            km
          </Typography>
        </Grid>

        <Grid item container justifyContent="space-between">
          <Typography
            display="inline"
            variant="button"
            color="textSecondary"
            component="div"
          >
            Running For:{" "}
          </Typography>
          <Typography
            classes={{ root: classes.grow }}
            align="right"
            display="inline"
            variant="button"
          >
            {runningFor || "0.00"}
          </Typography>
          <Typography
            classes={{ root: classes.unit }}
            align="right"
            display="inline"
            variant="button"
          >
            s
          </Typography>
        </Grid>
      </MenuItem>
    </MenuSection>
  );
};
