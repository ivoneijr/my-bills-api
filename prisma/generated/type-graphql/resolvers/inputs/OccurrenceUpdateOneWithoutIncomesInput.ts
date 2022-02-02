import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OccurrenceCreateOrConnectWithoutIncomesInput } from "../inputs/OccurrenceCreateOrConnectWithoutIncomesInput";
import { OccurrenceCreateWithoutIncomesInput } from "../inputs/OccurrenceCreateWithoutIncomesInput";
import { OccurrenceUpdateWithoutIncomesInput } from "../inputs/OccurrenceUpdateWithoutIncomesInput";
import { OccurrenceUpsertWithoutIncomesInput } from "../inputs/OccurrenceUpsertWithoutIncomesInput";
import { OccurrenceWhereUniqueInput } from "../inputs/OccurrenceWhereUniqueInput";

@TypeGraphQL.InputType("OccurrenceUpdateOneWithoutIncomesInput", {
  isAbstract: true
})
export class OccurrenceUpdateOneWithoutIncomesInput {
  @TypeGraphQL.Field(_type => OccurrenceCreateWithoutIncomesInput, {
    nullable: true
  })
  create?: OccurrenceCreateWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceCreateOrConnectWithoutIncomesInput, {
    nullable: true
  })
  connectOrCreate?: OccurrenceCreateOrConnectWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceUpsertWithoutIncomesInput, {
    nullable: true
  })
  upsert?: OccurrenceUpsertWithoutIncomesInput | undefined;

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

  @TypeGraphQL.Field(_type => OccurrenceUpdateWithoutIncomesInput, {
    nullable: true
  })
  update?: OccurrenceUpdateWithoutIncomesInput | undefined;
}
