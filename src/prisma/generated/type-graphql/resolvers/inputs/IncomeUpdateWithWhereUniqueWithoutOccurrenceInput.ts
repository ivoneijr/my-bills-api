import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeUpdateWithoutOccurrenceInput } from "../inputs/IncomeUpdateWithoutOccurrenceInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeUpdateWithWhereUniqueWithoutOccurrenceInput", {
  isAbstract: true
})
export class IncomeUpdateWithWhereUniqueWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeUpdateWithoutOccurrenceInput, {
    nullable: false
  })
  data!: IncomeUpdateWithoutOccurrenceInput;
}
