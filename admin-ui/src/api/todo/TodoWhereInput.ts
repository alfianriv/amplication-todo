import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TodoWhereInput = {
  author?: UserWhereUniqueInput;
  id?: StringFilter;
  todo?: StringFilter;
};
