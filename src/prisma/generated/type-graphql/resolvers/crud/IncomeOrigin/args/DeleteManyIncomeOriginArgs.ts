import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginWhereInput } from "../../../inputs/IncomeOriginWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginWhereInput, {
    nullable: true
  })
  where?: IncomeOriginWhereInput | undefined;
}
