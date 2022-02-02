import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateManyIncomeOriginInputEnvelope } from "../inputs/IncomeCreateManyIncomeOriginInputEnvelope";
import { IncomeCreateOrConnectWithoutIncomeOriginInput } from "../inputs/IncomeCreateOrConnectWithoutIncomeOriginInput";
import { IncomeCreateWithoutIncomeOriginInput } from "../inputs/IncomeCreateWithoutIncomeOriginInput";
import { IncomeScalarWhereInput } from "../inputs/IncomeScalarWhereInput";
import { IncomeUpdateManyWithWhereWithoutIncomeOriginInput } from "../inputs/IncomeUpdateManyWithWhereWithoutIncomeOriginInput";
import { IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput } from "../inputs/IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput";
import { IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput } from "../inputs/IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeUpdateManyWithoutIncomeOriginInput", {
  isAbstract: true
})
export class IncomeUpdateManyWithoutIncomeOriginInput {
  @TypeGraphQL.Field(_type => [IncomeCreateWithoutIncomeOriginInput], {
    nullable: true
  })
  create?: IncomeCreateWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeCreateOrConnectWithoutIncomeOriginInput], {
    nullable: true
  })
  connectOrCreate?: IncomeCreateOrConnectWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput], {
    nullable: true
  })
  upsert?: IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => IncomeCreateManyIncomeOriginInputEnvelope, {
    nullable: true
  })
  createMany?: IncomeCreateManyIncomeOriginInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput], {
    nullable: true
  })
  update?: IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeUpdateManyWithWhereWithoutIncomeOriginInput], {
    nullable: true
  })
  updateMany?: IncomeUpdateManyWithWhereWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IncomeScalarWhereInput[] | undefined;
}
