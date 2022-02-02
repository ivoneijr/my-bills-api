import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCountAggregate } from "../outputs/IncomeOriginCountAggregate";
import { IncomeOriginMaxAggregate } from "../outputs/IncomeOriginMaxAggregate";
import { IncomeOriginMinAggregate } from "../outputs/IncomeOriginMinAggregate";

@TypeGraphQL.ObjectType("IncomeOriginGroupBy", {
  isAbstract: true
})
export class IncomeOriginGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IncomeOriginCountAggregate, {
    nullable: true
  })
  _count!: IncomeOriginCountAggregate | null;

  @TypeGraphQL.Field(_type => IncomeOriginMinAggregate, {
    nullable: true
  })
  _min!: IncomeOriginMinAggregate | null;

  @TypeGraphQL.Field(_type => IncomeOriginMaxAggregate, {
    nullable: true
  })
  _max!: IncomeOriginMaxAggregate | null;
}
