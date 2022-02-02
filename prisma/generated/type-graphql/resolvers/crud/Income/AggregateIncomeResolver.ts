import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIncomeArgs } from "./args/AggregateIncomeArgs";
import { Income } from "../../../models/Income";
import { AggregateIncome } from "../../outputs/AggregateIncome";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Income)
export class AggregateIncomeResolver {
  @TypeGraphQL.Query(_returns => AggregateIncome, {
    nullable: false
  })
  async aggregateIncome(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIncomeArgs): Promise<AggregateIncome> {
    return getPrismaFromContext(ctx).income.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
