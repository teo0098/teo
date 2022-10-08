export const defaultRequirements = [
  { condition: /^.{6,}$/, label: 'Includes at least 6 characters' },
  { condition: /[0-9]/, label: 'Includes number' },
  { condition: /[a-z]/, label: 'Includes lowercase letter' },
  { condition: /[A-Z]/, label: 'Includes uppercase letter' },
  { condition: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];
