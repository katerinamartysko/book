import React, { FC } from 'react';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils';

const useStyles = makeStyles()((theme: AppTheme) => ({
  root: {
    height: 'fit-content',
    margin: theme.spacing(2),
    borderRadius: '50%',
    border: '1px solid',
    width: 80,
    minWidth: 40,
    '& $label': {
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    },
    '&:hover': {
      '& $label': {
        transform: 'scale(1.3)',
      },
    },
  },
}));

interface Props {
  onRemoveClientID: () => void;
}

export const BackButton: FC<Props> = ({ onRemoveClientID }) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const hideButton = useMediaQuery(theme.breakpoints.up('sm'));

  if (hideButton) return null;
  return (
    <Button variant="outlined" className={classes.root} onClick={onRemoveClientID}>
      Back
    </Button>
  );
};
