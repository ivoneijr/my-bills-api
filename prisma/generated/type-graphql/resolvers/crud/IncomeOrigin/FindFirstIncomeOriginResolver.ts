import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstIncomeOriginArgs } from "./args/FindFirstIncomeOriginArgs";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class FindFirstIncomeOriginResolver {
  @TypeGraphQL.Query(_returns => IncomeOrigin, {
    nullable: true
  })
  async findFirstIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIncomeOriginArgs): Promise<IncomeOrigin | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
