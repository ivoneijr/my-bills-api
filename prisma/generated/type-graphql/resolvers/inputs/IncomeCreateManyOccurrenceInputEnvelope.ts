import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateManyOccurrenceInput } from "../inputs/IncomeCreateManyOccurrenceInput";

@TypeGraphQL.InputType("IncomeCreateManyOccurrenceInputEnvelope", {
  isAbstract: true
})
export class IncomeCreateManyOccurrenceInputEnvelope {
  @TypeGraphQL.Field(_type => [IncomeCreateManyOccurrenceInput], {
    nullable: false
  })
  data!: IncomeCreateManyOccurrenceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
