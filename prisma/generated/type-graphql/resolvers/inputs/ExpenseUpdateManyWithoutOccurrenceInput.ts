import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyOccurrenceInputEnvelope } from "../inputs/ExpenseCreateManyOccurrenceInputEnvelope";
import { ExpenseCreateOrConnectWithoutOccurrenceInput } from "../inputs/ExpenseCreateOrConnectWithoutOccurrenceInput";
import { ExpenseCreateWithoutOccurrenceInput } from "../inputs/ExpenseCreateWithoutOccurrenceInput";
import { ExpenseScalarWhereInput } from "../inputs/ExpenseScalarWhereInput";
import { ExpenseUpdateManyWithWhereWithoutOccurrenceInput } from "../inputs/ExpenseUpdateManyWithWhereWithoutOccurrenceInput";
import { ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput } from "../inputs/ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput";
import { ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput } from "../inputs/ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateManyWithoutOccurrenceInput", {
  isAbstract: true
})
export class ExpenseUpdateManyWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => [ExpenseCreateWithoutOccurrenceInput], {
    nullable: true
  })
  create?: ExpenseCreateWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseCreateOrConnectWithoutOccurrenceInput], {
    nullable: true
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput], {
    nullable: true
  })
  upsert?: ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => ExpenseCreateManyOccurrenceInputEnvelope, {
    nullable: true
  })
  createMany?: ExpenseCreateManyOccurrenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  set?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  delete?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseWhereUniqueInput], {
    nullable: true
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput], {
    nullable: true
  })
  update?: ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseUpdateManyWithWhereWithoutOccurrenceInput], {
    nullable: true
  })
  updateMany?: ExpenseUpdateManyWithWhereWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExpenseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExpenseScalarWhereInput[] | undefined;
}
