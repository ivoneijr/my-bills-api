import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumExpenseCategoryFilter } from "../inputs/EnumExpenseCategoryFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExpenseScalarWhereInput", {
  isAbstract: true
})
export class ExpenseScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExpenseScalarWhereInput], {
    nullable: true
  })
  AND?: ExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseScalarWhereInput], {
    nullable: true
  })
  OR?: ExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseScalarWhereInput], {
    nullable: true
  })
  NOT?: ExpenseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  amount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => EnumExpenseCategoryFilter, {
    nullable: true
  })
  category?: EnumExpenseCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  paidAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  occurrenceId?: StringNullableFilter | undefined;
}
