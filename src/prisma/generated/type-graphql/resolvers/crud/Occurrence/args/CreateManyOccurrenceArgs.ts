import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceCreateManyInput } from "../../../inputs/OccurrenceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOccurrenceArgs {
  @TypeGraphQL.Field(_type => [OccurrenceCreateManyInput], {
    nullable: false
  })
  data!: OccurrenceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
