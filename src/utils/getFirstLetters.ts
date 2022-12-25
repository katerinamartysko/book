import { General } from '../api/types';

export const getFirstLetters = (general: General): string => {
  if (general.firstName) return `${general.firstName[0]}${general.lastName[0]}`;
  return general.lastName[0];
};
