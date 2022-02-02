import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyOccurrenceInput } from "../inputs/ExpenseCreateManyOccurrenceInput";

@TypeGraphQL.InputType("ExpenseCreateManyOccurrenceInputEnvelope", {
  isAbstract: true
})
export class ExpenseCreateManyOccurrenceInputEnvelope {
  @TypeGraphQL.Field(_type => [ExpenseCreateManyOccurrenceInput], {
    nullable: false
  })
  data!: ExpenseCreateManyOccurrenceInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
