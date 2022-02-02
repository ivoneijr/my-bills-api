import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IncomeOriginRelationFilter } from "../inputs/IncomeOriginRelationFilter";
import { OccurrenceRelationFilter } from "../inputs/OccurrenceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("IncomeWhereInput", {
  isAbstract: true
})
export class IncomeWhereInput {
  @TypeGraphQL.Field(_type => [IncomeWhereInput], {
    nullable: true
  })
  AND?: IncomeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereInput], {
    nullable: true
  })
  OR?: IncomeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereInput], {
    nullable: true
  })
  NOT?: IncomeWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IncomeOriginRelationFilter, {
    nullable: true
  })
  IncomeOrigin?: IncomeOriginRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  incomeOriginId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => OccurrenceRelationFilter, {
    nullable: true
  })
  Occurrence?: OccurrenceRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  occurrenceId?: StringNullableFilter | undefined;
}
