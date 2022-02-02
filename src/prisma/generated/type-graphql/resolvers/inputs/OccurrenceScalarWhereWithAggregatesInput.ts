import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OccurrenceScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OccurrenceScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OccurrenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OccurrenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OccurrenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OccurrenceScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  startsAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  endsAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
