import React, { FC, ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()(() => ({
  root: {},
  title: {
    fontWeight: 700,
  },
}));
interface Props {
  title: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ title, children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{title}:&nbsp;</Typography>
      {children}
    </div>
  );
};
