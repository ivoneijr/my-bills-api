import * as TypeGraphQL from "type-graphql";
import { Income } from "../../../models/Income";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { Occurrence } from "../../../models/Occurrence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Income)
export class IncomeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => IncomeOrigin, {
    nullable: true
  })
  async IncomeOrigin(@TypeGraphQL.Root() income: Income, @TypeGraphQL.Ctx() ctx: any): Promise<IncomeOrigin | null> {
    return getPrismaFromContext(ctx).income.findUnique({
      where: {
        id: income.id,
      },
    }).IncomeOrigin({});
  }

  @TypeGraphQL.FieldResolver(_type => Occurrence, {
    nullable: true
  })
  async Occurrence(@TypeGraphQL.Root() income: Income, @TypeGraphQL.Ctx() ctx: any): Promise<Occurrence | null> {
    return getPrismaFromContext(ctx).income.findUnique({
      where: {
        id: income.id,
      },
    }).Occurrence({});
  }
}
