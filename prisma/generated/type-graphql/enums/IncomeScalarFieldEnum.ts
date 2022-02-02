import * as TypeGraphQL from "type-graphql";

export enum IncomeScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  incomeOriginId = "incomeOriginId",
  occurrenceId = "occurrenceId"
}
TypeGraphQL.registerEnumType(IncomeScalarFieldEnum, {
  name: "IncomeScalarFieldEnum",
  description: undefined,
});
