import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCountAggregate } from "../outputs/IncomeCountAggregate";
import { IncomeMaxAggregate } from "../outputs/IncomeMaxAggregate";
import { IncomeMinAggregate } from "../outputs/IncomeMinAggregate";

@TypeGraphQL.ObjectType("IncomeGroupBy", {
  isAbstract: true
})
export class IncomeGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incomeOriginId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occurrenceId!: string | null;

  @TypeGraphQL.Field(_type => IncomeCountAggregate, {
    nullable: true
  })
  _count!: IncomeCountAggregate | null;

  @TypeGraphQL.Field(_type => IncomeMinAggregate, {
    nullable: true
  })
  _min!: IncomeMinAggregate | null;

  @TypeGraphQL.Field(_type => IncomeMaxAggregate, {
    nullable: true
  })
  _max!: IncomeMaxAggregate | null;
}
