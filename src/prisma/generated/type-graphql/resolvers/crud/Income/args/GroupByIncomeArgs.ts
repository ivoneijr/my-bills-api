import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOrderByWithAggregationInput } from "../../../inputs/IncomeOrderByWithAggregationInput";
import { IncomeScalarWhereWithAggregatesInput } from "../../../inputs/IncomeScalarWhereWithAggregatesInput";
import { IncomeWhereInput } from "../../../inputs/IncomeWhereInput";
import { IncomeScalarFieldEnum } from "../../../../enums/IncomeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  where?: IncomeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncomeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IncomeOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "incomeOriginId" | "occurrenceId">;

  @TypeGraphQL.Field(_type => IncomeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IncomeScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
