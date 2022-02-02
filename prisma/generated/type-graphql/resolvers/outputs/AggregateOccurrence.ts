import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCountAggregate } from "../outputs/OccurrenceCountAggregate";
import { OccurrenceMaxAggregate } from "../outputs/OccurrenceMaxAggregate";
import { OccurrenceMinAggregate } from "../outputs/OccurrenceMinAggregate";

@TypeGraphQL.ObjectType("AggregateOccurrence", {
  isAbstract: true
})
export class AggregateOccurrence {
  @TypeGraphQL.Field(_type => OccurrenceCountAggregate, {
    nullable: true
  })
  _count!: OccurrenceCountAggregate | null;

  @TypeGraphQL.Field(_type => OccurrenceMinAggregate, {
    nullable: true
  })
  _min!: OccurrenceMinAggregate | null;

  @TypeGraphQL.Field(_type => OccurrenceMaxAggregate, {
    nullable: true
  })
  _max!: OccurrenceMaxAggregate | null;
}
