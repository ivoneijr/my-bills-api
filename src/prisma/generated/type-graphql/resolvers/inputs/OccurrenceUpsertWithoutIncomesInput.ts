import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateWithoutIncomesInput } from "../inputs/OccurrenceCreateWithoutIncomesInput";
import { OccurrenceUpdateWithoutIncomesInput } from "../inputs/OccurrenceUpdateWithoutIncomesInput";

@TypeGraphQL.InputType("OccurrenceUpsertWithoutIncomesInput", {
  isAbstract: true
})
export class OccurrenceUpsertWithoutIncomesInput {
  @TypeGraphQL.Field(_type => OccurrenceUpdateWithoutIncomesInput, {
    nullable: false
  })
  update!: OccurrenceUpdateWithoutIncomesInput;

  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutIncomesInput, {
    nullable: false
  })
  create!: OccurrenceCreateWithoutIncomesInput;
}
