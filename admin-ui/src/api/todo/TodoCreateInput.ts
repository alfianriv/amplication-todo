import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoCreateInput = {
  author: UserWhereUniqueInput;
  todo: string;
};
