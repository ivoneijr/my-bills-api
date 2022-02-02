import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateIncomeOriginArgs } from "./args/CreateIncomeOriginArgs";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class CreateIncomeOriginResolver {
  @TypeGraphQL.Mutation(_returns => IncomeOrigin, {
    nullable: false
  })
  async createIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateIncomeOriginArgs): Promise<IncomeOrigin> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
