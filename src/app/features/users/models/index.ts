export type UserRoles = 'admin' | 'default' | null;

export interface User {
  role: UserRoles,
  name: string,
  id?: string,
}
