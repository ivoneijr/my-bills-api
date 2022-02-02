import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCreateOrConnectWithoutIncomesInput } from "../inputs/IncomeOriginCreateOrConnectWithoutIncomesInput";
import { IncomeOriginCreateWithoutIncomesInput } from "../inputs/IncomeOriginCreateWithoutIncomesInput";
import { IncomeOriginWhereUniqueInput } from "../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.InputType("IncomeOriginCreateNestedOneWithoutIncomesInput", {
  isAbstract: true
})
export class IncomeOriginCreateNestedOneWithoutIncomesInput {
  @TypeGraphQL.Field(_type => IncomeOriginCreateWithoutIncomesInput, {
    nullable: true
  })
  create?: IncomeOriginCreateWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginCreateOrConnectWithoutIncomesInput, {
    nullable: true
  })
  connectOrCreate?: IncomeOriginCreateOrConnectWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: true
  })
  connect?: IncomeOriginWhereUniqueInput | undefined;
}
