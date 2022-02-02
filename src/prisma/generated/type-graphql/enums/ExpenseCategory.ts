import * as TypeGraphQL from "type-graphql";

export enum ExpenseCategory {
  CREDIT_CARD = "CREDIT_CARD",
  FIXED = "FIXED",
  VARIABLE = "VARIABLE",
  SEASONAL = "SEASONAL",
  INVESTMENT = "INVESTMENT",
  HEALTH = "HEALTH",
  EDUCATION = "EDUCATION",
  ENTERTAINMENT = "ENTERTAINMENT",
  FOOD = "FOOD",
  RENTING = "RENTING",
  CAR = "CAR",
  FAMILY = "FAMILY",
  OTHER = "OTHER"
}
TypeGraphQL.registerEnumType(ExpenseCategory, {
  name: "ExpenseCategory",
  description: undefined,
});
