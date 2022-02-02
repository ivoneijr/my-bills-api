import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseOrderByRelationAggregateInput } from "../inputs/ExpenseOrderByRelationAggregateInput";
import { IncomeOrderByRelationAggregateInput } from "../inputs/IncomeOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OccurrenceOrderByWithRelationInput", {
  isAbstract: true
})
export class OccurrenceOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ExpenseOrderByRelationAggregateInput, {
    nullable: true
  })
  expenses?: ExpenseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOrderByRelationAggregateInput, {
    nullable: true
  })
  incomes?: IncomeOrderByRelationAggregateInput | undefined;
}
