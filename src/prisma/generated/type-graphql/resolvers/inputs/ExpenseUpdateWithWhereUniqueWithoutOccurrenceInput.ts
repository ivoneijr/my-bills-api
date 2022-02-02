import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseUpdateWithoutOccurrenceInput } from "../inputs/ExpenseUpdateWithoutOccurrenceInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput", {
  isAbstract: true
})
export class ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => ExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpenseUpdateWithoutOccurrenceInput, {
    nullable: false
  })
  data!: ExpenseUpdateWithoutOccurrenceInput;
}
