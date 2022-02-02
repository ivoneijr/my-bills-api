import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Expense } from "../models/Expense";
import { Income } from "../models/Income";
import { OccurrenceCount } from "../resolvers/outputs/OccurrenceCount";

@TypeGraphQL.ObjectType("Occurrence", {
  isAbstract: true
})
export class Occurrence {
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

  expenses?: Expense[];

  incomes?: Income[];

  @TypeGraphQL.Field(_type => OccurrenceCount, {
    nullable: true
  })
  _count?: OccurrenceCount | null;
}
