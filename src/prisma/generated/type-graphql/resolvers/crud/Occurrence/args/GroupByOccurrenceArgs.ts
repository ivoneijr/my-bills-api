import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OccurrenceOrderByWithAggregationInput } from "../../../inputs/OccurrenceOrderByWithAggregationInput";
import { OccurrenceScalarWhereWithAggregatesInput } from "../../../inputs/OccurrenceScalarWhereWithAggregatesInput";
import { OccurrenceWhereInput } from "../../../inputs/OccurrenceWhereInput";
import { OccurrenceScalarFieldEnum } from "../../../../enums/OccurrenceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOccurrenceArgs {
  @TypeGraphQL.Field(_type => OccurrenceWhereInput, {
    nullable: true
  })
  where?: OccurrenceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OccurrenceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OccurrenceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "description" | "startsAt" | "endsAt" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => OccurrenceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OccurrenceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
