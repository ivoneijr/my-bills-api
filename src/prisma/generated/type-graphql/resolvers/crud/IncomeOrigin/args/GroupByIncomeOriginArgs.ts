import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginOrderByWithAggregationInput } from "../../../inputs/IncomeOriginOrderByWithAggregationInput";
import { IncomeOriginScalarWhereWithAggregatesInput } from "../../../inputs/IncomeOriginScalarWhereWithAggregatesInput";
import { IncomeOriginWhereInput } from "../../../inputs/IncomeOriginWhereInput";
import { IncomeOriginScalarFieldEnum } from "../../../../enums/IncomeOriginScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginWhereInput, {
    nullable: true
  })
  where?: IncomeOriginWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncomeOriginOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IncomeOriginOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeOriginScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "description" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => IncomeOriginScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IncomeOriginScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
