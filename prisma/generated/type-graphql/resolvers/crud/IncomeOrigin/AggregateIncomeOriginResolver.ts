import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIncomeOriginArgs } from "./args/AggregateIncomeOriginArgs";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { AggregateIncomeOrigin } from "../../outputs/AggregateIncomeOrigin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class AggregateIncomeOriginResolver {
  @TypeGraphQL.Query(_returns => AggregateIncomeOrigin, {
    nullable: false
  })
  async aggregateIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIncomeOriginArgs): Promise<AggregateIncomeOrigin> {
    return getPrismaFromContext(ctx).incomeOrigin.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
