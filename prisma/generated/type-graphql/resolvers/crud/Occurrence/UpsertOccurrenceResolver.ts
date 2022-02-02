import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOccurrenceArgs } from "./args/UpsertOccurrenceArgs";
import { Occurrence } from "../../../models/Occurrence";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Occurrence)
export class UpsertOccurrenceResolver {
  @TypeGraphQL.Mutation(_returns => Occurrence, {
    nullable: false
  })
  async upsertOccurrence(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOccurrenceArgs): Promise<Occurrence> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).occurrence.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
