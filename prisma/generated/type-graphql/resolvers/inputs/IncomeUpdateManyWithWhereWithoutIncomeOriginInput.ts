import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeScalarWhereInput } from "../inputs/IncomeScalarWhereInput";
import { IncomeUpdateManyMutationInput } from "../inputs/IncomeUpdateManyMutationInput";

@TypeGraphQL.InputType("IncomeUpdateManyWithWhereWithoutIncomeOriginInput", {
  isAbstract: true
})
export class IncomeUpdateManyWithWhereWithoutIncomeOriginInput {
  @TypeGraphQL.Field(_type => IncomeScalarWhereInput, {
    nullable: false
  })
  where!: IncomeScalarWhereInput;

  @TypeGraphQL.Field(_type => IncomeUpdateManyMutationInput, {
    nullable: false
  })
  data!: IncomeUpdateManyMutationInput;
}
