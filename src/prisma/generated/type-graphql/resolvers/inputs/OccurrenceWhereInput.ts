import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExpenseListRelationFilter } from "../inputs/ExpenseListRelationFilter";
import { IncomeListRelationFilter } from "../inputs/IncomeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OccurrenceWhereInput", {
  isAbstract: true
})
export class OccurrenceWhereInput {
  @TypeGraphQL.Field(_type => [OccurrenceWhereInput], {
    nullable: true
  })
  AND?: OccurrenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceWhereInput], {
    nullable: true
  })
  OR?: OccurrenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceWhereInput], {
    nullable: true
  })
  NOT?: OccurrenceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startsAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endsAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ExpenseListRelationFilter, {
    nullable: true
  })
  expenses?: ExpenseListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IncomeListRelationFilter, {
    nullable: true
  })
  incomes?: IncomeListRelationFilter | undefined;
}
