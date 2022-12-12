import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface Props {
  search: string | null;
  onSearch: (filter: string) => void;
}

export const Search: FC<Props> = ({ search, onSearch }) => {
  const filter = search === null ? '' : search;
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Поиск..."
        variant="outlined"
        value={filter}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
};
