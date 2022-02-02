import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeWhereInput } from "../../../inputs/IncomeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  where?: IncomeWhereInput | undefined;
}
