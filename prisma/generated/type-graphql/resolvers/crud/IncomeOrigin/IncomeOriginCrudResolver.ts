import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIncomeOriginArgs } from "./args/AggregateIncomeOriginArgs";
import { CreateIncomeOriginArgs } from "./args/CreateIncomeOriginArgs";
import { CreateManyIncomeOriginArgs } from "./args/CreateManyIncomeOriginArgs";
import { DeleteIncomeOriginArgs } from "./args/DeleteIncomeOriginArgs";
import { DeleteManyIncomeOriginArgs } from "./args/DeleteManyIncomeOriginArgs";
import { FindFirstIncomeOriginArgs } from "./args/FindFirstIncomeOriginArgs";
import { FindManyIncomeOriginArgs } from "./args/FindManyIncomeOriginArgs";
import { FindUniqueIncomeOriginArgs } from "./args/FindUniqueIncomeOriginArgs";
import { GroupByIncomeOriginArgs } from "./args/GroupByIncomeOriginArgs";
import { UpdateIncomeOriginArgs } from "./args/UpdateIncomeOriginArgs";
import { UpdateManyIncomeOriginArgs } from "./args/UpdateManyIncomeOriginArgs";
import { UpsertIncomeOriginArgs } from "./args/UpsertIncomeOriginArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { IncomeOrigin } from "../../../models/IncomeOrigin";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIncomeOrigin } from "../../outputs/AggregateIncomeOrigin";
import { IncomeOriginGroupBy } from "../../outputs/IncomeOriginGroupBy";

@TypeGraphQL.Resolver(_of => IncomeOrigin)
export class IncomeOriginCrudResolver {
  @TypeGraphQL.Query(_returns => IncomeOrigin, {
    nullable: true
  })
  async incomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIncomeOriginArgs): Promise<IncomeOrigin | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [IncomeOrigin], {
    nullable: false
  })
  async incomeOrigins(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIncomeOriginArgs): Promise<IncomeOrigin[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIncomeOriginArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => IncomeOrigin, {
    nullable: true
  })
  async updateIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateIncomeOriginArgs): Promise<IncomeOrigin | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIncomeOriginArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIncomeOriginArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incomeOrigin.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => AggregateIncomeOrigin, {
    nullable: false
  })
  async aggregateIncomeOrigin(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIncomeOriginArgs): Promise<AggregateIncomeOrigin> {
    return getPrismaFromContext(ctx).incomeOrigin.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

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
