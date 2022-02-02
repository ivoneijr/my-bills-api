import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IncomeScalarWhereInput", {
  isAbstract: true
})
export class IncomeScalarWhereInput {
  @TypeGraphQL.Field(_type => [IncomeScalarWhereInput], {
    nullable: true
  })
  AND?: IncomeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarWhereInput], {
    nullable: true
  })
  OR?: IncomeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarWhereInput], {
    nullable: true
  })
  NOT?: IncomeScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  incomeOriginId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  occurrenceId?: StringNullableFilter | undefined;
}
