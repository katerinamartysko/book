import { General } from '../api/types';

export const getFirstLetters = (general: General): string => {
  return [general.firstName?.[0], general.lastName[0]].filter(Boolean).join('');
};
