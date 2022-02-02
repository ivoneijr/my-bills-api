import * as TypeGraphQL from "type-graphql";

export enum ExpenseScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  name = "name",
  description = "description",
  amount = "amount",
  category = "category",
  paidAt = "paidAt",
  occurrenceId = "occurrenceId"
}
TypeGraphQL.registerEnumType(ExpenseScalarFieldEnum, {
  name: "ExpenseScalarFieldEnum",
  description: undefined,
});
