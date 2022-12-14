import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, CircularProgress, Divider, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { selectClientId } from '../store/clients/selectors';
import { getClientId } from '../store/clients/actions';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks';
import { theme } from '../utils/them';

interface Props {
  clientID: number | null;
}
const useStyles = makeStyles()(() => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(5),
  },
  details: {
    display: 'flex',
  },
}));

export const ClientId: FC<Props> = ({ clientID }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const client = useSelector(selectClientId);

  const [fetchClientsById, isClientIdLoading, clientIdError] = useFetching(async (id: number) => {
    const response = await PostService.getClientId(id);
    dispatch(getClientId(response.data));
  });

  useEffect(() => {
    if (clientID === null) return;
    fetchClientsById(clientID);
  }, [clientID]);

  if (!client) return null;
  return (
    <div>
      <div className={classes.details}>
        <div>
          <Avatar alt="Remy Sharp" src={client.general.avatar} className={classes.avatar} />
        </div>
        <div>
          <Typography>
            Name:
            {client.general.firstName} {client.general.lastName}
          </Typography>
          <Divider />
          <Typography>
            Job:
            <br /> Company: {client.job.company} <br /> Title: {client.job.title} <br />
          </Typography>
          <Typography>
            Contact: <br /> Email: {client.contact.email} <br /> Phone: {client.contact.phone} <br />
            Address: <br />
            Country:
            {client.address.country} <br /> City: {client.address.city} <br /> Street: {client.address.street}
            <br /> Zip code: {client.address.zipCode}
          </Typography>
        </div>
      </div>
      {clientIdError && <h1 className="error">Произошла ошибка {clientIdError}</h1>}
      {isClientIdLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
