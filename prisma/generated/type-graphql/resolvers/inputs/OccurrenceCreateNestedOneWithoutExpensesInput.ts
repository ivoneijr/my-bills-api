import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateOrConnectWithoutExpensesInput } from "../inputs/OccurrenceCreateOrConnectWithoutExpensesInput";
import { OccurrenceCreateWithoutExpensesInput } from "../inputs/OccurrenceCreateWithoutExpensesInput";
import { OccurrenceWhereUniqueInput } from "../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.InputType("OccurrenceCreateNestedOneWithoutExpensesInput", {
  isAbstract: true
})
export class OccurrenceCreateNestedOneWithoutExpensesInput {
  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutExpensesInput, {
    nullable: true
  })
  create?: OccurrenceCreateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceCreateOrConnectWithoutExpensesInput, {
    nullable: true
  })
  connectOrCreate?: OccurrenceCreateOrConnectWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: true
  })
  connect?: OccurrenceWhereUniqueInput | undefined;
}
