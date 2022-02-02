import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateOrConnectWithoutExpensesInput } from "../inputs/OccurrenceCreateOrConnectWithoutExpensesInput";
import { OccurrenceCreateWithoutExpensesInput } from "../inputs/OccurrenceCreateWithoutExpensesInput";
import { OccurrenceUpdateWithoutExpensesInput } from "../inputs/OccurrenceUpdateWithoutExpensesInput";
import { OccurrenceUpsertWithoutExpensesInput } from "../inputs/OccurrenceUpsertWithoutExpensesInput";
import { OccurrenceWhereUniqueInput } from "../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.InputType("OccurrenceUpdateOneWithoutExpensesInput", {
  isAbstract: true
})
export class OccurrenceUpdateOneWithoutExpensesInput {
  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutExpensesInput, {
    nullable: true
  })
  create?: OccurrenceCreateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceCreateOrConnectWithoutExpensesInput, {
    nullable: true
  })
  connectOrCreate?: OccurrenceCreateOrConnectWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceUpsertWithoutExpensesInput, {
    nullable: true
  })
  upsert?: OccurrenceUpsertWithoutExpensesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => OccurrenceWhereUniqueInput, {
    nullable: true
  })
  connect?: OccurrenceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceUpdateWithoutExpensesInput, {
    nullable: true
  })
  update?: OccurrenceUpdateWithoutExpensesInput | undefined;
}
