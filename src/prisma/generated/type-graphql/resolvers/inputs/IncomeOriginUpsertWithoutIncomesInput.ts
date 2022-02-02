import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCreateWithoutIncomesInput } from "../inputs/IncomeOriginCreateWithoutIncomesInput";
import { IncomeOriginUpdateWithoutIncomesInput } from "../inputs/IncomeOriginUpdateWithoutIncomesInput";

@TypeGraphQL.InputType("IncomeOriginUpsertWithoutIncomesInput", {
  isAbstract: true
})
export class IncomeOriginUpsertWithoutIncomesInput {
  @TypeGraphQL.Field(_type => IncomeOriginUpdateWithoutIncomesInput, {
    nullable: false
  })
  update!: IncomeOriginUpdateWithoutIncomesInput;

  @TypeGraphQL.Field(_type => IncomeOriginCreateWithoutIncomesInput, {
    nullable: false
  })
  create!: IncomeOriginCreateWithoutIncomesInput;
}
