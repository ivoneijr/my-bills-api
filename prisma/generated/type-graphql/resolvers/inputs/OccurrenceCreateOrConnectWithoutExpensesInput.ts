import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateWithoutExpensesInput } from "../inputs/OccurrenceCreateWithoutExpensesInput";
import { OccurrenceWhereUniqueInput } from "../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.InputType("OccurrenceCreateOrConnectWithoutExpensesInput", {
  isAbstract: true
})
export class OccurrenceCreateOrConnectWithoutExpensesInput {
  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: false
  })
  where!: OccurrenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutExpensesInput, {
    nullable: false
  })
  create!: OccurrenceCreateWithoutExpensesInput;
}
