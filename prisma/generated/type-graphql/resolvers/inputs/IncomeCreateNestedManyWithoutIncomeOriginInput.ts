import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateManyIncomeOriginInputEnvelope } from "../inputs/IncomeCreateManyIncomeOriginInputEnvelope";
import { IncomeCreateOrConnectWithoutIncomeOriginInput } from "../inputs/IncomeCreateOrConnectWithoutIncomeOriginInput";
import { IncomeCreateWithoutIncomeOriginInput } from "../inputs/IncomeCreateWithoutIncomeOriginInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeCreateNestedManyWithoutIncomeOriginInput", {
  isAbstract: true
})
export class IncomeCreateNestedManyWithoutIncomeOriginInput {
  @TypeGraphQL.Field(_type => [IncomeCreateWithoutIncomeOriginInput], {
    nullable: true
  })
  create?: IncomeCreateWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeCreateOrConnectWithoutIncomeOriginInput], {
    nullable: true
  })
  connectOrCreate?: IncomeCreateOrConnectWithoutIncomeOriginInput[] | undefined;

  @TypeGraphQL.Field(_type => IncomeCreateManyIncomeOriginInputEnvelope, {
    nullable: true
  })
  createMany?: IncomeCreateManyIncomeOriginInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereUniqueInput], {
    nullable: true
  })
  connect?: IncomeWhereUniqueInput[] | undefined;
}
