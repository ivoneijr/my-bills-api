import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceUpdateManyMutationInput } from "../../../inputs/OccurrenceUpdateManyMutationInput";
import { OccurrenceWhereInput } from "../../../inputs/OccurrenceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceUpdateManyMutationInput, {
    nullable: false
  })
  data!: OccurrenceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OccurrenceWhereInput, {
    nullable: true
  })
  where?: OccurrenceWhereInput | undefined;
}
