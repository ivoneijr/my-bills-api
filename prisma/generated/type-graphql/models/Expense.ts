import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Occurrence } from "../models/Occurrence";
import { ExpenseCategory } from "../enums/ExpenseCategory";

@TypeGraphQL.ObjectType("Expense", {
  isAbstract: true
})
export class Expense {
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
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => ExpenseCategory, {
    nullable: false
  })
  category!: "CREDIT_CARD" | "FIXED" | "VARIABLE" | "SEASONAL" | "INVESTMENT" | "HEALTH" | "EDUCATION" | "ENTERTAINMENT" | "FOOD" | "RENTING" | "CAR" | "FAMILY" | "OTHER";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  paidAt!: Date;

  Occurrence?: Occurrence | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occurrenceId?: string | null;
}
