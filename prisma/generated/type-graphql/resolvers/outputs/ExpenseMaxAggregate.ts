import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCategory } from "../../enums/ExpenseCategory";

@TypeGraphQL.ObjectType("ExpenseMaxAggregate", {
  isAbstract: true
})
export class ExpenseMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount!: number | null;

  @TypeGraphQL.Field(_type => ExpenseCategory, {
    nullable: true
  })
  category!: "CREDIT_CARD" | "FIXED" | "VARIABLE" | "SEASONAL" | "INVESTMENT" | "HEALTH" | "EDUCATION" | "ENTERTAINMENT" | "FOOD" | "RENTING" | "CAR" | "FAMILY" | "OTHER" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  paidAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  occurrenceId!: string | null;
}
