import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IncomeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IncomeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IncomeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IncomeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IncomeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IncomeScalarWhereWithAggregatesInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  incomeOriginId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  occurrenceId?: StringNullableWithAggregatesFilter | undefined;
}
