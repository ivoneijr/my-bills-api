import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceCreateInput } from "../../../inputs/OccurrenceCreateInput";
import { OccurrenceUpdateInput } from "../../../inputs/OccurrenceUpdateInput";
import { OccurrenceWhereUniqueInput } from "../../../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: false
  })
  where!: OccurrenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccurrenceCreateInput, {
    nullable: false
  })
  create!: OccurrenceCreateInput;

  @TypeGraphQL.Field(_type => OccurrenceUpdateInput, {
    nullable: false
  })
  update!: OccurrenceUpdateInput;
}
