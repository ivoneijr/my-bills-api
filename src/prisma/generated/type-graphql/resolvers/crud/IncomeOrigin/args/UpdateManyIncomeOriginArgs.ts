import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginUpdateManyMutationInput } from "../../../inputs/IncomeOriginUpdateManyMutationInput";
import { IncomeOriginWhereInput } from "../../../inputs/IncomeOriginWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginUpdateManyMutationInput, {
    nullable: false
  })
  data!: IncomeOriginUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IncomeOriginWhereInput, {
    nullable: true
  })
  where?: IncomeOriginWhereInput | undefined;
}
