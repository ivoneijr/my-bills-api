import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCategory } from "../../enums/ExpenseCategory";

@TypeGraphQL.InputType("EnumExpenseCategoryFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumExpenseCategoryFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ExpenseCategory, {
    nullable: true
  })
  set?: "CREDIT_CARD" | "FIXED" | "VARIABLE" | "SEASONAL" | "INVESTMENT" | "HEALTH" | "EDUCATION" | "ENTERTAINMENT" | "FOOD" | "RENTING" | "CAR" | "FAMILY" | "OTHER" | undefined;
}
