import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByIncomeOriginArgs } from "./args/GroupByIncomeOriginArgs";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { IncomeOriginGroupBy } from "../../outputs/IncomeOriginGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class GroupByIncomeOriginResolver {
  @TypeGraphQL.Query(_returns => [IncomeOriginGroupBy], {
    nullable: false
  })
  async groupByIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIncomeOriginArgs): Promise<IncomeOriginGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
