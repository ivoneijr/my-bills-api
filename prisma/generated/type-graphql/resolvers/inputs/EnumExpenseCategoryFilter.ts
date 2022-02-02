import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumExpenseCategoryFilter } from "../inputs/NestedEnumExpenseCategoryFilter";
import { ExpenseCategory } from "../../enums/ExpenseCategory";

@TypeGraphQL.InputType("EnumExpenseCategoryFilter", {
  isAbstract: true
})
export class EnumExpenseCategoryFilter {
  @TypeGraphQL.Field(_type => ExpenseCategory, {
    nullable: true
  })
  equals?: "CREDIT_CARD" | "FIXED" | "VARIABLE" | "SEASONAL" | "INVESTMENT" | "HEALTH" | "EDUCATION" | "ENTERTAINMENT" | "FOOD" | "RENTING" | "CAR" | "FAMILY" | "OTHER" | undefined;

  @TypeGraphQL.Field(_type => [ExpenseCategory], {
    nullable: true
  })
  in?: Array<"CREDIT_CARD" | "FIXED" | "VARIABLE" | "SEASONAL" | "INVESTMENT" | "HEALTH" | "EDUCATION" | "ENTERTAINMENT" | "FOOD" | "RENTING" | "CAR" | "FAMILY" | "OTHER"> | undefined;

  @TypeGraphQL.Field(_type => [ExpenseCategory], {
    nullable: true
  })
  notIn?: Array<"CREDIT_CARD" | "FIXED" | "VARIABLE" | "SEASONAL" | "INVESTMENT" | "HEALTH" | "EDUCATION" | "ENTERTAINMENT" | "FOOD" | "RENTING" | "CAR" | "FAMILY" | "OTHER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExpenseCategoryFilter, {
    nullable: true
  })
  not?: NestedEnumExpenseCategoryFilter | undefined;
}
