import { SortOrder } from "../../util/SortOrder";

export type TodoOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  todo?: SortOrder;
  updatedAt?: SortOrder;
};
