import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeWhereUniqueInput } from "../../../inputs/IncomeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: false
  })
  where!: IncomeWhereUniqueInput;
}
