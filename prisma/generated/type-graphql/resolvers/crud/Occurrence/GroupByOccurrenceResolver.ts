import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByOccurrenceArgs } from "./args/GroupByOccurrenceArgs";
import { Occurrence } from "../../../models/Occurrence";
import { OccurrenceGroupBy } from "../../outputs/OccurrenceGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Occurrence)
export class GroupByOccurrenceResolver {
  @TypeGraphQL.Query(_returns => [OccurrenceGroupBy], {
    nullable: false
  })
  async groupByOccurrence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByOccurrenceArgs): Promise<OccurrenceGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).occurrence.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
