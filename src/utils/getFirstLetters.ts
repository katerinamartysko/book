interface GetFirstLetters {
  firstName?: string;
  lastName: string;
}

export const getFirstLetters = ({ firstName, lastName }: GetFirstLetters): string => {
  if (firstName) return `${firstName[0]}${lastName[0]}`;
  return lastName[0];
};
