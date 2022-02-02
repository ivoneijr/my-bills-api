import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCountOrderByAggregateInput } from "../inputs/IncomeCountOrderByAggregateInput";
import { IncomeMaxOrderByAggregateInput } from "../inputs/IncomeMaxOrderByAggregateInput";
import { IncomeMinOrderByAggregateInput } from "../inputs/IncomeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IncomeOrderByWithAggregationInput", {
  isAbstract: true
})
export class IncomeOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  incomeOriginId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  occurrenceId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IncomeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IncomeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncomeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IncomeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncomeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IncomeMinOrderByAggregateInput | undefined;
}
