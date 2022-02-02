import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceWhereInput } from "../../../inputs/OccurrenceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceWhereInput, {
    nullable: true
  })
  where?: OccurrenceWhereInput | undefined;
}
