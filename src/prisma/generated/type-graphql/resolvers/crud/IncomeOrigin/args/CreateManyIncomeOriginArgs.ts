import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginCreateManyInput } from "../../../inputs/IncomeOriginCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIncomeOriginArgs {
  @TypeGraphQL.Field(_type => [IncomeOriginCreateManyInput], {
    nullable: false
  })
  data!: IncomeOriginCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
