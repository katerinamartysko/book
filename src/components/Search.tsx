import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface Props {
  search: string | null;
  setSearch: (filter: string | null) => void;
}

export const Search: FC<Props> = ({ search, setSearch }) => {
  const filter = search === null ? '' : search;
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Поиск..."
        variant="outlined"
        value={filter}
        onChange={event => setSearch(event.target.value)}
      />
    </div>
  );
};
