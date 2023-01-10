import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';
import classNames from 'classnames';
import { theme } from '../utils';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
  },
  title: {
    marginLeft: theme.spacing(3),
  },
  value: {
    fontWeight: 100,
  },
  bolt: {
    fontWeight: 700,
  },
}));

interface Props {
  boltTitle?: boolean;
  title: string;
  value?: string;
}

export const Description: FC<Props> = ({ boltTitle, title, value }) => {
  const { classes } = useStyles();

  if (!value) return null;
  return (
    <div className={classes.root}>
      <Typography className={classNames(classes.title, { [classes.bolt]: boltTitle })}>{title}:&nbsp;</Typography>
      <Typography className={classes.value}>{value}</Typography>
    </div>
  );
};
