import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyOccurrenceInputEnvelope } from "../inputs/ExpenseCreateManyOccurrenceInputEnvelope";
import { ExpenseCreateOrConnectWithoutOccurrenceInput } from "../inputs/ExpenseCreateOrConnectWithoutOccurrenceInput";
import { ExpenseCreateWithoutOccurrenceInput } from "../inputs/ExpenseCreateWithoutOccurrenceInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateNestedManyWithoutOccurrenceInput", {
  isAbstract: true
})
export class ExpenseCreateNestedManyWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => [ExpenseCreateWithoutOccurrenceInput], {
    nullable: true
  })
  create?: ExpenseCreateWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseCreateOrConnectWithoutOccurrenceInput], {
    nullable: true
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => ExpenseCreateManyOccurrenceInputEnvelope, {
    nullable: true
  })
  createMany?: ExpenseCreateManyOccurrenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;
}
