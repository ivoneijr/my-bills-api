import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCountAggregate } from "../outputs/OccurrenceCountAggregate";
import { OccurrenceMaxAggregate } from "../outputs/OccurrenceMaxAggregate";
import { OccurrenceMinAggregate } from "../outputs/OccurrenceMinAggregate";

@TypeGraphQL.ObjectType("OccurrenceGroupBy", {
  isAbstract: true
})
export class OccurrenceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startsAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endsAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
