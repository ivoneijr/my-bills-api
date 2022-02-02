import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateWithoutOccurrenceInput } from "../inputs/IncomeCreateWithoutOccurrenceInput";
import { IncomeUpdateWithoutOccurrenceInput } from "../inputs/IncomeUpdateWithoutOccurrenceInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeUpsertWithWhereUniqueWithoutOccurrenceInput", {
  isAbstract: true
})
export class IncomeUpsertWithWhereUniqueWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeUpdateWithoutOccurrenceInput, {
    nullable: false
  })
  update!: IncomeUpdateWithoutOccurrenceInput;

  @TypeGraphQL.Field(_type => IncomeCreateWithoutOccurrenceInput, {
    nullable: false
  })
  create!: IncomeCreateWithoutOccurrenceInput;
}
