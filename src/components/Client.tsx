import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { Avatar, Box, CircularProgress, Divider, Typography } from '@mui/material';
import { theme, getFirstLetters } from '../utils';
import { Description } from './Description';
import { Section } from './Section';
import { BackButton } from './index';
import { useClient } from '../hooks/useClient';

const useStyles = makeStyles()(() => ({
  flex: {
    display: 'flex',
  },
  root: {
    overflow: 'hidden',
    height: '100%',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  avatar: {
    width: '160px',
    height: '160px',
    fontSize: '48px',
    marginRight: theme.spacing(10),
    background: 'pink',
    [theme.breakpoints.down('md')]: {
      margin: `${theme.spacing(3)} auto`,
    },
  },
  details: {
    [theme.breakpoints.down('md')]: {
      display: 'block',
      justifyContent: 'center',
    },
  },
}));

interface Props {
  clientID: number;
  onRemoveClientID: () => void;
}

export const Client: FC<Props> = ({ clientID, onRemoveClientID }) => {
  const { classes } = useStyles();
  const { data: client, isLoading: isClientLoading, isError } = useClient(clientID);

  if (!client) return <Typography>No client</Typography>;
  return (
    <>
      {isClientLoading && (
        <Box className={classes.flex}>
          <CircularProgress />
        </Box>
      )}

      {isError && (
        <Typography variant="h1" className="error">
          Error
        </Typography>
      )}

      <BackButton onRemoveClientID={onRemoveClientID} />
      <div className={classNames(classes.root, classes.flex)}>
        <div className={classNames(classes.details, classes.flex)}>
          <Avatar alt="Avatar" src={client.general.avatar} className={classes.avatar}>
            {getFirstLetters({ firstName: client.general.firstName, lastName: client.general.lastName })}
          </Avatar>
          <div>
            <Description boltTitle title="Name" value={`${client.general.firstName} ${client.general.lastName}`} />
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
      </div>
    </>
  );
};
