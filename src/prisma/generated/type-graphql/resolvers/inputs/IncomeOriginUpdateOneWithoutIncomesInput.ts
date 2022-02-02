import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncomeOriginCreateOrConnectWithoutIncomesInput } from "../inputs/IncomeOriginCreateOrConnectWithoutIncomesInput";
import { IncomeOriginCreateWithoutIncomesInput } from "../inputs/IncomeOriginCreateWithoutIncomesInput";
import { IncomeOriginUpdateWithoutIncomesInput } from "../inputs/IncomeOriginUpdateWithoutIncomesInput";
import { IncomeOriginUpsertWithoutIncomesInput } from "../inputs/IncomeOriginUpsertWithoutIncomesInput";
import { IncomeOriginWhereUniqueInput } from "../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.InputType("IncomeOriginUpdateOneWithoutIncomesInput", {
  isAbstract: true
})
export class IncomeOriginUpdateOneWithoutIncomesInput {
  @TypeGraphQL.Field(_type => IncomeOriginCreateWithoutIncomesInput, {
    nullable: true
  })
  create?: IncomeOriginCreateWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginCreateOrConnectWithoutIncomesInput, {
    nullable: true
  })
  connectOrCreate?: IncomeOriginCreateOrConnectWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginUpsertWithoutIncomesInput, {
    nullable: true
  })
  upsert?: IncomeOriginUpsertWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: true
  })
  connect?: IncomeOriginWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginUpdateWithoutIncomesInput, {
    nullable: true
  })
  update?: IncomeOriginUpdateWithoutIncomesInput | undefined;
}
