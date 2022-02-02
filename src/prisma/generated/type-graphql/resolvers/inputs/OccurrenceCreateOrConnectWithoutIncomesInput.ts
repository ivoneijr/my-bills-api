import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateWithoutIncomesInput } from "../inputs/OccurrenceCreateWithoutIncomesInput";
import { OccurrenceWhereUniqueInput } from "../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.InputType("OccurrenceCreateOrConnectWithoutIncomesInput", {
  isAbstract: true
})
export class OccurrenceCreateOrConnectWithoutIncomesInput {
  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: false
  })
  where!: OccurrenceWhereUniqueInput;

  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutIncomesInput, {
    nullable: false
  })
  create!: OccurrenceCreateWithoutIncomesInput;
}
