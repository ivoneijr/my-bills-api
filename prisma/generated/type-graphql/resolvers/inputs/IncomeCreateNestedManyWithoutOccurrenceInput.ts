import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeCreateManyOccurrenceInputEnvelope } from "../inputs/IncomeCreateManyOccurrenceInputEnvelope";
import { IncomeCreateOrConnectWithoutOccurrenceInput } from "../inputs/IncomeCreateOrConnectWithoutOccurrenceInput";
import { IncomeCreateWithoutOccurrenceInput } from "../inputs/IncomeCreateWithoutOccurrenceInput";
import { IncomeWhereUniqueInput } from "../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.InputType("IncomeCreateNestedManyWithoutOccurrenceInput", {
  isAbstract: true
})
export class IncomeCreateNestedManyWithoutOccurrenceInput {
  @TypeGraphQL.Field(_type => [IncomeCreateWithoutOccurrenceInput], {
    nullable: true
  })
  create?: IncomeCreateWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncomeCreateOrConnectWithoutOccurrenceInput], {
    nullable: true
  })
  connectOrCreate?: IncomeCreateOrConnectWithoutOccurrenceInput[] | undefined;

  @TypeGraphQL.Field(_type => IncomeCreateManyOccurrenceInputEnvelope, {
    nullable: true
  })
  createMany?: IncomeCreateManyOccurrenceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IncomeWhereUniqueInput], {
    nullable: true
  })
  connect?: IncomeWhereUniqueInput[] | undefined;
}
