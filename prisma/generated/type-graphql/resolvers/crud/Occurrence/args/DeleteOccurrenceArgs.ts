import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceWhereUniqueInput } from "../../../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: false
  })
  where!: OccurrenceWhereUniqueInput;
}
