import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCountOrderByAggregateInput } from "../inputs/IncomeOriginCountOrderByAggregateInput";
import { IncomeOriginMaxOrderByAggregateInput } from "../inputs/IncomeOriginMaxOrderByAggregateInput";
import { IncomeOriginMinOrderByAggregateInput } from "../inputs/IncomeOriginMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IncomeOriginOrderByWithAggregationInput", {
  isAbstract: true
})
export class IncomeOriginOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IncomeOriginCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IncomeOriginMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IncomeOriginMinOrderByAggregateInput | undefined;
}
