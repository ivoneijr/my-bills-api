import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateWithoutOccurrenceInput } from "../inputs/IncomeCreateWithoutOccurrenceInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeCreateOrConnectWithoutOccurrenceInput", {
  isAbstract: true
})
export class IncomeCreateOrConnectWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeCreateWithoutOccurrenceInput, {
    nullable: false
  })
  create!: IncomeCreateWithoutOccurrenceInput;
}
