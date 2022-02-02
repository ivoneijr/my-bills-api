import * as TypeGraphQL from "type-graphql";

export enum OccurrenceScalarFieldEnum {
  id = "id",
  description = "description",
  startsAt = "startsAt",
  endsAt = "endsAt",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(OccurrenceScalarFieldEnum, {
  name: "OccurrenceScalarFieldEnum",
  description: undefined,
});
