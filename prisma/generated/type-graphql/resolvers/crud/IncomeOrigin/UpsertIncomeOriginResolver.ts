import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertIncomeOriginArgs } from "./args/UpsertIncomeOriginArgs";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class UpsertIncomeOriginResolver {
  @TypeGraphQL.Mutation(_returns => IncomeOrigin, {
    nullable: false
  })
  async upsertIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertIncomeOriginArgs): Promise<IncomeOrigin> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
