import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeCreateManyInput } from "../../../inputs/IncomeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIncomeArgs {
  @TypeGraphQL.Field(_type => [IncomeCreateManyInput], {
    nullable: false
  })
  data!: IncomeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
