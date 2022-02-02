import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCountOrderByAggregateInput } from "../inputs/OccurrenceCountOrderByAggregateInput";
import { OccurrenceMaxOrderByAggregateInput } from "../inputs/OccurrenceMaxOrderByAggregateInput";
import { OccurrenceMinOrderByAggregateInput } from "../inputs/OccurrenceMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OccurrenceOrderByWithAggregationInput", {
  isAbstract: true
})
export class OccurrenceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startsAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  endsAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OccurrenceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OccurrenceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OccurrenceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OccurrenceMinOrderByAggregateInput | undefined;
}
