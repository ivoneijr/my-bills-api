import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeCreateInput } from "../../../inputs/IncomeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeCreateInput, {
    nullable: false
  })
  data!: IncomeCreateInput;
}
