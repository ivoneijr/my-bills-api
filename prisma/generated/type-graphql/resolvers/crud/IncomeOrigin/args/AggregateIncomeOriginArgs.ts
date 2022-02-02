import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOriginOrderByWithRelationInput } from "../../../inputs/IncomeOriginOrderByWithRelationInput";
import { IncomeOriginWhereInput } from "../../../inputs/IncomeOriginWhereInput";
import { IncomeOriginWhereUniqueInput } from "../../../inputs/IncomeOriginWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIncomeOriginArgs {
  @TypeGraphQL.Field(_type => IncomeOriginWhereInput, {
    nullable: true
  })
  where?: IncomeOriginWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncomeOriginOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IncomeOriginOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginWhereUniqueInput, {
    nullable: true
  })
  cursor?: IncomeOriginWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
