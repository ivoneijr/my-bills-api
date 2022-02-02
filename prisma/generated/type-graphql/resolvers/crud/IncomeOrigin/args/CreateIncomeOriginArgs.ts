import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginCreateInput } from "../../../inputs/IncomeOriginCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginCreateInput, {
    nullable: false
  })
  data!: IncomeOriginCreateInput;
}
