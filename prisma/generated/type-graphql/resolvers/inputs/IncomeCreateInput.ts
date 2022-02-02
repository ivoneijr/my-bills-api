import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCreateNestedOneWithoutIncomesInput } from "../inputs/IncomeOriginCreateNestedOneWithoutIncomesInput";
import { OccurrenceCreateNestedOneWithoutIncomesInput } from "../inputs/OccurrenceCreateNestedOneWithoutIncomesInput";

@TypeGraphQL.InputType("IncomeCreateInput", {
  isAbstract: true
})
export class IncomeCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginCreateNestedOneWithoutIncomesInput, {
    nullable: true
  })
  IncomeOrigin?: IncomeOriginCreateNestedOneWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceCreateNestedOneWithoutIncomesInput, {
    nullable: true
  })
  Occurrence?: OccurrenceCreateNestedOneWithoutIncomesInput | undefined;
}
