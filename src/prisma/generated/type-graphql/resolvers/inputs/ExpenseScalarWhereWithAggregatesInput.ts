import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumExpenseCategoryWithAggregatesFilter } from "../inputs/EnumExpenseCategoryWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExpenseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExpenseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExpenseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExpenseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExpenseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExpenseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  amount?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumExpenseCategoryWithAggregatesFilter, {
    nullable: true
  })
  category?: EnumExpenseCategoryWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  paidAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  occurrenceId?: StringNullableWithAggregatesFilter | undefined;
}
