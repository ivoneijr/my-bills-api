import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginUpdateInput } from "../../../inputs/IncomeOriginUpdateInput";
import { IncomeOriginWhereUniqueInput } from "../../../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginUpdateInput, {
    nullable: false
  })
  data!: IncomeOriginUpdateInput;

  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeOriginWhereUniqueInput;
}
