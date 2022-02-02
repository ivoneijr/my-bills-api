import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCategory } from "../../enums/ExpenseCategory";

@TypeGraphQL.InputType("ExpenseCreateWithoutOccurrenceInput", {
  isAbstract: true
})
export class ExpenseCreateWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

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
}
