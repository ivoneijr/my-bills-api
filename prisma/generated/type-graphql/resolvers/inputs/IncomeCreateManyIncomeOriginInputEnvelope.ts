import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateManyIncomeOriginInput } from "../inputs/IncomeCreateManyIncomeOriginInput";

@TypeGraphQL.InputType("IncomeCreateManyIncomeOriginInputEnvelope", {
  isAbstract: true
})
export class IncomeCreateManyIncomeOriginInputEnvelope {
  @TypeGraphQL.Field(_type => [IncomeCreateManyIncomeOriginInput], {
    nullable: false
  })
  data!: IncomeCreateManyIncomeOriginInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
