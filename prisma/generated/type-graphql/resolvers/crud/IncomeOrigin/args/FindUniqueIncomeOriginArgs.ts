import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginWhereUniqueInput } from "../../../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeOriginWhereUniqueInput;
}
