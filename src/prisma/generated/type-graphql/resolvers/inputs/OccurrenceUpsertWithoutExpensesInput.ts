import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateWithoutExpensesInput } from "../inputs/OccurrenceCreateWithoutExpensesInput";
import { OccurrenceUpdateWithoutExpensesInput } from "../inputs/OccurrenceUpdateWithoutExpensesInput";

@TypeGraphQL.InputType("OccurrenceUpsertWithoutExpensesInput", {
  isAbstract: true
})
export class OccurrenceUpsertWithoutExpensesInput {
  @TypeGraphQL.Field(_type => OccurrenceUpdateWithoutExpensesInput, {
    nullable: false
  })
  update!: OccurrenceUpdateWithoutExpensesInput;

  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutExpensesInput, {
    nullable: false
  })
  create!: OccurrenceCreateWithoutExpensesInput;
}
