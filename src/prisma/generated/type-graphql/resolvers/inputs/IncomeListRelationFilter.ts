import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeWhereInput } from "../inputs/IncomeWhereInput";

@TypeGraphQL.InputType("IncomeListRelationFilter", {
  isAbstract: true
})
export class IncomeListRelationFilter {
  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  every?: IncomeWhereInput | undefined;

  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  some?: IncomeWhereInput | undefined;

  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  none?: IncomeWhereInput | undefined;
}
