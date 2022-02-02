import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginCreateInput } from "../../../inputs/IncomeOriginCreateInput";
import { IncomeOriginUpdateInput } from "../../../inputs/IncomeOriginUpdateInput";
import { IncomeOriginWhereUniqueInput } from "../../../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeOriginWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeOriginCreateInput, {
    nullable: false
  })
  create!: IncomeOriginCreateInput;

  @TypeGraphQL.Field(_type => IncomeOriginUpdateInput, {
    nullable: false
  })
  update!: IncomeOriginUpdateInput;
}
