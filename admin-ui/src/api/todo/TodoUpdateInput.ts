import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  author?: UserWhereUniqueInput;
  todo?: string;
};
