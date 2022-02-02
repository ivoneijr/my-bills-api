import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCreateWithoutIncomesInput } from "../inputs/IncomeOriginCreateWithoutIncomesInput";
import { IncomeOriginWhereUniqueInput } from "../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.InputType("IncomeOriginCreateOrConnectWithoutIncomesInput", {
  isAbstract: true
})
export class IncomeOriginCreateOrConnectWithoutIncomesInput {
  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeOriginWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeOriginCreateWithoutIncomesInput, {
    nullable: false
  })
  create!: IncomeOriginCreateWithoutIncomesInput;
}
