export function generateRandomString(length = 5) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getInitials(
  firstName: string | null | undefined,
  lastName: string | null | undefined,
  email: string | null | undefined,
): string {
  const firstInitial = firstName ? firstName.charAt(0) : "";
  const lastInitial = lastName ? lastName.charAt(0) : "";

  let initials = `${firstInitial}${lastInitial}`.toUpperCase();

  if (!initials && email) {
    initials = email.substring(0, 2).toUpperCase();
  }

  return initials;
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function splitUUID(uuid: string) {
  if (typeof uuid !== "string") {
    return uuid;
  }

  const groups = uuid.split("-");
  return groups[0];
}
