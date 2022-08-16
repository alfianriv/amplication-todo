import { User } from "../user/User";

export type Todo = {
  author?: User;
  createdAt: Date;
  id: string;
  todo: string;
  updatedAt: Date;
};
