import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceUpdateInput } from "../../../inputs/OccurrenceUpdateInput";
import { OccurrenceWhereUniqueInput } from "../../../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceUpdateInput, {
    nullable: false
  })
  data!: OccurrenceUpdateInput;

  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: false
  })
  where!: OccurrenceWhereUniqueInput;
}
