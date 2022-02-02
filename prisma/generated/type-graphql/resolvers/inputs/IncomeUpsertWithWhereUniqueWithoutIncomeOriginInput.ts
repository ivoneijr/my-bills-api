import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateWithoutIncomeOriginInput } from "../inputs/IncomeCreateWithoutIncomeOriginInput";
import { IncomeUpdateWithoutIncomeOriginInput } from "../inputs/IncomeUpdateWithoutIncomeOriginInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput", {
  isAbstract: true
})
export class IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeUpdateWithoutIncomeOriginInput, {
    nullable: false
  })
  update!: IncomeUpdateWithoutIncomeOriginInput;

  @TypeGraphQL.Field(_type => IncomeCreateWithoutIncomeOriginInput, {
    nullable: false
  })
  create!: IncomeCreateWithoutIncomeOriginInput;
}
