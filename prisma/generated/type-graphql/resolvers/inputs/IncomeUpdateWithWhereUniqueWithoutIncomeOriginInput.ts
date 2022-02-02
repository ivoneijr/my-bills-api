import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeUpdateWithoutIncomeOriginInput } from "../inputs/IncomeUpdateWithoutIncomeOriginInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput", {
  isAbstract: true
})
export class IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeUpdateWithoutIncomeOriginInput, {
    nullable: false
  })
  data!: IncomeUpdateWithoutIncomeOriginInput;
}
