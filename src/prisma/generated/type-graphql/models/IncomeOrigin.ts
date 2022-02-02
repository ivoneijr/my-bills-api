import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Income } from "../models/Income";
import { IncomeOriginCount } from "../resolvers/outputs/IncomeOriginCount";

@TypeGraphQL.ObjectType("IncomeOrigin", {
  isAbstract: true
})
export class IncomeOrigin {
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

  incomes?: Income[];

  @TypeGraphQL.Field(_type => IncomeOriginCount, {
    nullable: true
  })
  _count?: IncomeOriginCount | null;
}
