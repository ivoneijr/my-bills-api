import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IncomeOriginUpdateOneWithoutIncomesInput } from "../inputs/IncomeOriginUpdateOneWithoutIncomesInput";
import { OccurrenceUpdateOneWithoutIncomesInput } from "../inputs/OccurrenceUpdateOneWithoutIncomesInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("IncomeUpdateInput", {
  isAbstract: true
})
export class IncomeUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IncomeOriginUpdateOneWithoutIncomesInput, {
    nullable: true
  })
  IncomeOrigin?: IncomeOriginUpdateOneWithoutIncomesInput | undefined;

  @TypeGraphQL.Field(_type => OccurrenceUpdateOneWithoutIncomesInput, {
    nullable: true
  })
  Occurrence?: OccurrenceUpdateOneWithoutIncomesInput | undefined;
}
