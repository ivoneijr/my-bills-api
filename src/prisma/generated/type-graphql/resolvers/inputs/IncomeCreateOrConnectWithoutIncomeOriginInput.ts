import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateWithoutIncomeOriginInput } from "../inputs/IncomeCreateWithoutIncomeOriginInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeCreateOrConnectWithoutIncomeOriginInput", {
  isAbstract: true
})
export class IncomeCreateOrConnectWithoutIncomeOriginInput {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeCreateWithoutIncomeOriginInput, {
    nullable: false
  })
  create!: IncomeCreateWithoutIncomeOriginInput;
}
