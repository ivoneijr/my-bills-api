import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { IncomeOrigin } from "../models/IncomeOrigin";
import { Occurrence } from "../models/Occurrence";

@TypeGraphQL.ObjectType("Income", {
  isAbstract: true
})
export class Income {
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

  IncomeOrigin?: IncomeOrigin | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incomeOriginId?: string | null;

  Occurrence?: Occurrence | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occurrenceId?: string | null;
}
