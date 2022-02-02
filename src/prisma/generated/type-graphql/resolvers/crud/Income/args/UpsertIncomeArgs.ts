import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeCreateInput } from "../../../inputs/IncomeCreateInput";
import { IncomeUpdateInput } from "../../../inputs/IncomeUpdateInput";
import { IncomeWhereUniqueInput } from "../../../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncomeCreateInput, {
    nullable: false
  })
  create!: IncomeCreateInput;

  @TypeGraphQL.Field(_type => IncomeUpdateInput, {
    nullable: false
  })
  update!: IncomeUpdateInput;
}
