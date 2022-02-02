import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IncomeListRelationFilter } from "../inputs/IncomeListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IncomeOriginWhereInput", {
  isAbstract: true
})
export class IncomeOriginWhereInput {
  @TypeGraphQL.Field(_type => [IncomeOriginWhereInput], {
    nullable: true
  })
  AND?: IncomeOriginWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeOriginWhereInput], {
    nullable: true
  })
  OR?: IncomeOriginWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeOriginWhereInput], {
    nullable: true
  })
  NOT?: IncomeOriginWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IncomeListRelationFilter, {
    nullable: true
  })
  incomes?: IncomeListRelationFilter | undefined;
}
