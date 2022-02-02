import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteIncomeOriginArgs } from "./args/DeleteIncomeOriginArgs";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class DeleteIncomeOriginResolver {
  @TypeGraphQL.Mutation(_returns => IncomeOrigin, {
    nullable: true
  })
  async deleteIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteIncomeOriginArgs): Promise<IncomeOrigin | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
