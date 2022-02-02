import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutOccurrenceInput } from "../inputs/ExpenseCreateWithoutOccurrenceInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateOrConnectWithoutOccurrenceInput", {
  isAbstract: true
})
export class ExpenseCreateOrConnectWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => ExpenseWhereUniqueInput, {
    nullable: false
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExpenseCreateWithoutOccurrenceInput, {
    nullable: false
  })
  create!: ExpenseCreateWithoutOccurrenceInput;
}
