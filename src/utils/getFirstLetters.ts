interface GetFirstLetters {
  firstName?: string;
  lastName: string;
}

export const getFirstLetters = (general: GetFirstLetters): string => {
  if (general.firstName) return `${general.firstName[0]}${general.lastName[0]}`;
  return general.lastName[0];
};
