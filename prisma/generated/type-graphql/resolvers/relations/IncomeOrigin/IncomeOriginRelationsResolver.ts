import * as TypeGraphQL from "type-graphql";
import { Income } from "../../../models/Income";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { IncomeOriginIncomesArgs } from "./args/IncomeOriginIncomesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class IncomeOriginRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Income], {
    nullable: false
  })
  async incomes(@TypeGraphQL.Root() incomeOrigin: IncomeOrigin, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: IncomeOriginIncomesArgs): Promise<Income[]> {
    return getPrismaFromContext(ctx).incomeOrigin.findUnique({
      where: {
        id: incomeOrigin.id,
      },
    }).incomes(args);
  }
}
