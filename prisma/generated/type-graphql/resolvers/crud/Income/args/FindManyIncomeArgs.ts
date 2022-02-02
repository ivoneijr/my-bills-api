import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncomeOrderByWithRelationInput } from "../../../inputs/IncomeOrderByWithRelationInput";
import { IncomeWhereInput } from "../../../inputs/IncomeWhereInput";
import { IncomeWhereUniqueInput } from "../../../inputs/IncomeWhereUniqueInput";
import { IncomeScalarFieldEnum } from "../../../../enums/IncomeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyIncomeArgs {
  @TypeGraphQL.Field(_type => IncomeWhereInput, {
    nullable: true
  })
  where?: IncomeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncomeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IncomeOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IncomeWhereUniqueInput, {
    nullable: true
  })
  cursor?: IncomeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IncomeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "incomeOriginId" | "occurrenceId"> | undefined;
}
