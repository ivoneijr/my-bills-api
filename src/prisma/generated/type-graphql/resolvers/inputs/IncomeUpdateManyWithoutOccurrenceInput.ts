import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateManyOccurrenceInputEnvelope } from "../inputs/IncomeCreateManyOccurrenceInputEnvelope";
import { IncomeCreateOrConnectWithoutOccurrenceInput } from "../inputs/IncomeCreateOrConnectWithoutOccurrenceInput";
import { IncomeCreateWithoutOccurrenceInput } from "../inputs/IncomeCreateWithoutOccurrenceInput";
import { IncomeScalarWhereInput } from "../inputs/IncomeScalarWhereInput";
import { IncomeUpdateManyWithWhereWithoutOccurrenceInput } from "../inputs/IncomeUpdateManyWithWhereWithoutOccurrenceInput";
import { IncomeUpdateWithWhereUniqueWithoutOccurrenceInput } from "../inputs/IncomeUpdateWithWhereUniqueWithoutOccurrenceInput";
import { IncomeUpsertWithWhereUniqueWithoutOccurrenceInput } from "../inputs/IncomeUpsertWithWhereUniqueWithoutOccurrenceInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeUpdateManyWithoutOccurrenceInput", {
  isAbstract: true
})
export class IncomeUpdateManyWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => [IncomeCreateWithoutOccurrenceInput], {
    nullable: true
  })
  create?: IncomeCreateWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeCreateOrConnectWithoutOccurrenceInput], {
    nullable: true
  })
  connectOrCreate?: IncomeCreateOrConnectWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeUpsertWithWhereUniqueWithoutOccurrenceInput], {
    nullable: true
  })
  upsert?: IncomeUpsertWithWhereUniqueWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => IncomeCreateManyOccurrenceInputEnvelope, {
    nullable: true
  })
  createMany?: IncomeCreateManyOccurrenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereUniqueInput], {
    nullable: true
  })
  set?: IncomeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IncomeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereUniqueInput], {
    nullable: true
  })
  delete?: IncomeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereUniqueInput], {
    nullable: true
  })
  connect?: IncomeWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeUpdateWithWhereUniqueWithoutOccurrenceInput], {
    nullable: true
  })
  update?: IncomeUpdateWithWhereUniqueWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeUpdateManyWithWhereWithoutOccurrenceInput], {
    nullable: true
  })
  updateMany?: IncomeUpdateManyWithWhereWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IncomeScalarWhereInput[] | undefined;
}
