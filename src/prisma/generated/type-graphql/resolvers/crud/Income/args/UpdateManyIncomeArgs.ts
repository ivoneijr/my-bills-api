import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeUpdateManyMutationInput } from "../../../inputs/IncomeUpdateManyMutationInput";
import { IncomeWhereInput } from "../../../inputs/IncomeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeUpdateManyMutationInput, {
    nullable: false
  })
  data!: IncomeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  where?: IncomeWhereInput | undefined;
}
