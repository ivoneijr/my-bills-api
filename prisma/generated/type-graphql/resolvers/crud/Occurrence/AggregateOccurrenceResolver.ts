import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOccurrenceArgs } from "./args/AggregateOccurrenceArgs";
import { Occurrence } from "../../../models/Occurrence";
import { AggregateOccurrence } from "../../outputs/AggregateOccurrence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Occurrence)
export class AggregateOccurrenceResolver {
  @TypeGraphQL.Query(_returns => AggregateOccurrence, {
    nullable: false
  })
  async aggregateOccurrence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOccurrenceArgs): Promise<AggregateOccurrence> {
    return getPrismaFromContext(ctx).occurrence.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
