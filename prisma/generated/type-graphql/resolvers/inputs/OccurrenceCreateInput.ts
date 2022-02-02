import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateNestedManyWithoutOccurrenceInput } from "../inputs/ExpenseCreateNestedManyWithoutOccurrenceInput";
import { IncomeCreateNestedManyWithoutOccurrenceInput } from "../inputs/IncomeCreateNestedManyWithoutOccurrenceInput";

@TypeGraphQL.InputType("OccurrenceCreateInput", {
  isAbstract: true
})
export class OccurrenceCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ExpenseCreateNestedManyWithoutOccurrenceInput, {
    nullable: true
  })
  expenses?: ExpenseCreateNestedManyWithoutOccurrenceInput | undefined;

  @TypeGraphQL.Field(_type => IncomeCreateNestedManyWithoutOccurrenceInput, {
    nullable: true
  })
  incomes?: IncomeCreateNestedManyWithoutOccurrenceInput | undefined;
}
