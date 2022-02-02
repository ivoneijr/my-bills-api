import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateOrConnectWithoutIncomesInput } from "../inputs/OccurrenceCreateOrConnectWithoutIncomesInput";
import { OccurrenceCreateWithoutIncomesInput } from "../inputs/OccurrenceCreateWithoutIncomesInput";
import { OccurrenceWhereUniqueInput } from "../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.InputType("OccurrenceCreateNestedOneWithoutIncomesInput", {
  isAbstract: true
})
export class OccurrenceCreateNestedOneWithoutIncomesInput {
  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutIncomesInput, {
    nullable: true
  })
  create?: OccurrenceCreateWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceCreateOrConnectWithoutIncomesInput, {
    nullable: true
  })
  connectOrCreate?: OccurrenceCreateOrConnectWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: true
  })
  connect?: OccurrenceWhereUniqueInput | undefined;
}
