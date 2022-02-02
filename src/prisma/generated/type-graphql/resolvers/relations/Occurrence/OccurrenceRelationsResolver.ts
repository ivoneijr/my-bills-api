import * as TypeGraphQL from "type-graphql";
import { Expense } from "../../../models/Expense";
import { Income } from "../../../models/Income";
import { Occurrence } from "../../../models/Occurrence";
import { OccurrenceExpensesArgs } from "./args/OccurrenceExpensesArgs";
import { OccurrenceIncomesArgs } from "./args/OccurrenceIncomesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Occurrence)
export class OccurrenceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Expense], {
    nullable: false
  })
  async expenses(@TypeGraphQL.Root() occurrence: Occurrence, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OccurrenceExpensesArgs): Promise<Expense[]> {
    return getPrismaFromContext(ctx).occurrence.findUnique({
      where: {
        id: occurrence.id,
      },
    }).expenses(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Income], {
    nullable: false
  })
  async incomes(@TypeGraphQL.Root() occurrence: Occurrence, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OccurrenceIncomesArgs): Promise<Income[]> {
    return getPrismaFromContext(ctx).occurrence.findUnique({
      where: {
        id: occurrence.id,
      },
    }).incomes(args);
  }
}
