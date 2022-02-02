import * as TypeGraphQL from "type-graphql";
import { Expense } from "../../../models/Expense";
import { Occurrence } from "../../../models/Occurrence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Expense)
export class ExpenseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Occurrence, {
    nullable: true
  })
  async Occurrence(@TypeGraphQL.Root() expense: Expense, @TypeGraphQL.Ctx() ctx: any): Promise<Occurrence | null> {
    return getPrismaFromContext(ctx).expense.findUnique({
      where: {
        id: expense.id,
      },
    }).Occurrence({});
  }
}
