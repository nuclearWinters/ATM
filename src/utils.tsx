export const isUser = (user: unknown): user is User => {
  return (
    typeof user === "object" &&
    user !== null &&
    "name" in user &&
    typeof user.name === "string" &&
    "total" in user &&
    typeof user.total === "number"
  );
};

export interface User {
  name: string;
  total: number;
}
