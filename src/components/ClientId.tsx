import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, CircularProgress, Divider } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { selectClientId } from '../store/clients/selectors';
import { getClientId } from '../store/clients/actions';
import { theme, getFirstLetters } from '../utils';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks';
import { Description } from './Description';
import { Section } from './Section';

interface Props {
  clientID: number | null;
}
const useStyles = makeStyles()(() => ({
  root: {
    overflow: 'hidden',
    height: '100%',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(10),
    background: 'pink',
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
    <div className={classes.root}>
      <div className={classes.details}>
        <Avatar alt="Remy Sharp" src={client.general.avatar} className={classes.avatar}>
          {getFirstLetters(client.general)}
        </Avatar>
        <div>
          <Description bolt={true} title="Name" value={`${client.general.firstName} ${client.general.lastName}`} />
          <Divider />
          <Section title="Job">
            <Description title="Company" value={client.job.company} />
            <Description title="Title" value={client.job.title} />
          </Section>
          <Section title="Contact">
            <Description title="Phone" value={client.contact.phone} />
            <Description title="Email" value={client.contact.email} />
          </Section>
          <Section title="Address">
            <Description title="Country" value={client.address.country} />
            <Description title="City" value={client.address.city} />
            <Description title="Street" value={client.address.street} />
            <Description title="ZipCode" value={client.address.zipCode} />
          </Section>
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
