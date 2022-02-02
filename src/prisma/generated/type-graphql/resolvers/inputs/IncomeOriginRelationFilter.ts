import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginWhereInput } from "../inputs/IncomeOriginWhereInput";

@TypeGraphQL.InputType("IncomeOriginRelationFilter", {
  isAbstract: true
})
export class IncomeOriginRelationFilter {
  @TypeGraphQL.Field(_type => IncomeOriginWhereInput, {
    nullable: true
  })
  is?: IncomeOriginWhereInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginWhereInput, {
    nullable: true
  })
  isNot?: IncomeOriginWhereInput | undefined;
}
