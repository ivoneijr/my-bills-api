import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceOrderByWithRelationInput } from "../../../inputs/OccurrenceOrderByWithRelationInput";
import { OccurrenceWhereInput } from "../../../inputs/OccurrenceWhereInput";
import { OccurrenceWhereUniqueInput } from "../../../inputs/OccurrenceWhereUniqueInput";
import { OccurrenceScalarFieldEnum } from "../../../../enums/OccurrenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceWhereInput, {
    nullable: true
  })
  where?: OccurrenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OccurrenceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: true
  })
  cursor?: OccurrenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "description" | "startsAt" | "endsAt" | "createdAt" | "updatedAt"> | undefined;
}
