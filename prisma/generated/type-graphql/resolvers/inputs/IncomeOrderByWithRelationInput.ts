import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginOrderByWithRelationInput } from "../inputs/IncomeOriginOrderByWithRelationInput";
import { OccurrenceOrderByWithRelationInput } from "../inputs/OccurrenceOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IncomeOrderByWithRelationInput", {
  isAbstract: true
})
export class IncomeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginOrderByWithRelationInput, {
    nullable: true
  })
  IncomeOrigin?: IncomeOriginOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  incomeOriginId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OccurrenceOrderByWithRelationInput, {
    nullable: true
  })
  Occurrence?: OccurrenceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  occurrenceId?: "asc" | "desc" | undefined;
}
