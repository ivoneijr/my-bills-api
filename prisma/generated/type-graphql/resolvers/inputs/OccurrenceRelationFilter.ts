import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceWhereInput } from "../inputs/OccurrenceWhereInput";

@TypeGraphQL.InputType("OccurrenceRelationFilter", {
  isAbstract: true
})
export class OccurrenceRelationFilter {
  @TypeGraphQL.Field(_type => OccurrenceWhereInput, {
    nullable: true
  })
  is?: OccurrenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceWhereInput, {
    nullable: true
  })
  isNot?: OccurrenceWhereInput | undefined;
}
