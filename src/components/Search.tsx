import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { theme } from '../utils';

const useStyles = makeStyles()(() => ({
  search: {
    marginTop: theme.spacing(1),
  },
}));

interface Props {
  search: string | null;
  onSearch: (filter: string) => void;
}

export const Search: FC<Props> = ({ search, onSearch }) => {
  const { classes } = useStyles();

  const filter = search === null ? '' : search;
  return (
    <div>
      <TextField
        className={classes.search}
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        value={filter}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
};
