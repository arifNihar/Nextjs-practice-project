export const generateInitials = (fullName) => {
  const words = fullName.split(/\s+/);

  const initials = words.map((word) => word.charAt(0)).join(" ");

  return initials.toUpperCase();
};

// const fullName = "Arif Khan";
// const initials = generateInitials(fullName);
