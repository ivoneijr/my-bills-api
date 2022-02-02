import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumExpenseCategoryFilter } from "../inputs/NestedEnumExpenseCategoryFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ExpenseCategory } from "../../enums/ExpenseCategory";

@TypeGraphQL.InputType("NestedEnumExpenseCategoryWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumExpenseCategoryWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumExpenseCategoryWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumExpenseCategoryWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExpenseCategoryFilter, {
    nullable: true
  })
  _min?: NestedEnumExpenseCategoryFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumExpenseCategoryFilter, {
    nullable: true
  })
  _max?: NestedEnumExpenseCategoryFilter | undefined;
}
