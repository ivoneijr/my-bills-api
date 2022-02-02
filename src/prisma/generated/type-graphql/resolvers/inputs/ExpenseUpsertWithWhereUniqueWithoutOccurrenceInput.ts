import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutOccurrenceInput } from "../inputs/ExpenseCreateWithoutOccurrenceInput";
import { ExpenseUpdateWithoutOccurrenceInput } from "../inputs/ExpenseUpdateWithoutOccurrenceInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput", {
  isAbstract: true
})
export class ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => ExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpenseUpdateWithoutOccurrenceInput, {
    nullable: false
  })
  update!: ExpenseUpdateWithoutOccurrenceInput;

  @TypeGraphQL.Field(_type => ExpenseCreateWithoutOccurrenceInput, {
    nullable: false
  })
  create!: ExpenseCreateWithoutOccurrenceInput;
}
