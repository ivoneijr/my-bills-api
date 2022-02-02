import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceCreateInput } from "../../../inputs/OccurrenceCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceCreateInput, {
    nullable: false
  })
  data!: OccurrenceCreateInput;
}
