import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { Avatar, Box, CircularProgress, Divider, useMediaQuery } from '@mui/material';
import { selectClientId } from '../store/clients/selectors';
import { getClientId } from '../store/clients/actions';
import { theme, getFirstLetters } from '../utils';
import PostService from '../api/PostServise';
import { Description } from './Description';
import { useFetching } from '../hooks';
import { Section } from './Section';

interface Props {
  clientID: number | null;
}
const useStyles = makeStyles()(() => ({
  root: {
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  avatar: {
    width: '160px',
    height: '160px',
    marginRight: theme.spacing(10),
    background: 'pink',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  details: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  box: {
    display: 'flex',
  },
}));

export const ClientId: FC<Props> = ({ clientID }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const client = useSelector(selectClientId);
  const showClientID = useMediaQuery(theme.breakpoints.up('sm'));

  const [fetchClientsById, isClientIdLoading, clientIdError] = useFetching(async (id: number) => {
    const response = await PostService.getClientId(id);
    dispatch(getClientId(response.data));
  });

  useEffect(() => {
    if (clientID === null) return;
    fetchClientsById(clientID);
  }, [clientID]);

  if (!client || !showClientID) return null;
  return (
    <div className={classes.root}>
      <div className={classes.details}>
        <div>
          <Avatar alt="Remy Sharp" src={client.general.avatar} className={classes.avatar}>
            {getFirstLetters(client.general)}
          </Avatar>
        </div>
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
        <Box className={classes.box}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
