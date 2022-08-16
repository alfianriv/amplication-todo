/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TodoWhereUniqueInput } from "../../todo/base/TodoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TodoUpdateManyWithoutUsersInput {
  @Field(() => [TodoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TodoWhereUniqueInput],
  })
  connect?: Array<TodoWhereUniqueInput>;

  @Field(() => [TodoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TodoWhereUniqueInput],
  })
  disconnect?: Array<TodoWhereUniqueInput>;

  @Field(() => [TodoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TodoWhereUniqueInput],
  })
  set?: Array<TodoWhereUniqueInput>;
}
export { TodoUpdateManyWithoutUsersInput };