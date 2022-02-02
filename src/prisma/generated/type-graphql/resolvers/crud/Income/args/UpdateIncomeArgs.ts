import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeUpdateInput } from "../../../inputs/IncomeUpdateInput";
import { IncomeWhereUniqueInput } from "../../../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeUpdateInput, {
    nullable: false
  })
  data!: IncomeUpdateInput;

  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;
}
