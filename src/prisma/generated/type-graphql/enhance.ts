import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  IncomeOrigin: crudResolvers.IncomeOriginCrudResolver,
  Income: crudResolvers.IncomeCrudResolver,
  Expense: crudResolvers.ExpenseCrudResolver,
  Occurrence: crudResolvers.OccurrenceCrudResolver
};
const actionResolversMap = {
  IncomeOrigin: {
    incomeOrigin: actionResolvers.FindUniqueIncomeOriginResolver,
    findFirstIncomeOrigin: actionResolvers.FindFirstIncomeOriginResolver,
    incomeOrigins: actionResolvers.FindManyIncomeOriginResolver,
    createIncomeOrigin: actionResolvers.CreateIncomeOriginResolver,
    createManyIncomeOrigin: actionResolvers.CreateManyIncomeOriginResolver,
    deleteIncomeOrigin: actionResolvers.DeleteIncomeOriginResolver,
    updateIncomeOrigin: actionResolvers.UpdateIncomeOriginResolver,
    deleteManyIncomeOrigin: actionResolvers.DeleteManyIncomeOriginResolver,
    updateManyIncomeOrigin: actionResolvers.UpdateManyIncomeOriginResolver,
    upsertIncomeOrigin: actionResolvers.UpsertIncomeOriginResolver,
    aggregateIncomeOrigin: actionResolvers.AggregateIncomeOriginResolver,
    groupByIncomeOrigin: actionResolvers.GroupByIncomeOriginResolver
  },
  Income: {
    income: actionResolvers.FindUniqueIncomeResolver,
    findFirstIncome: actionResolvers.FindFirstIncomeResolver,
    incomes: actionResolvers.FindManyIncomeResolver,
    createIncome: actionResolvers.CreateIncomeResolver,
    createManyIncome: actionResolvers.CreateManyIncomeResolver,
    deleteIncome: actionResolvers.DeleteIncomeResolver,
    updateIncome: actionResolvers.UpdateIncomeResolver,
    deleteManyIncome: actionResolvers.DeleteManyIncomeResolver,
    updateManyIncome: actionResolvers.UpdateManyIncomeResolver,
    upsertIncome: actionResolvers.UpsertIncomeResolver,
    aggregateIncome: actionResolvers.AggregateIncomeResolver,
    groupByIncome: actionResolvers.GroupByIncomeResolver
  },
  Expense: {
    expense: actionResolvers.FindUniqueExpenseResolver,
    findFirstExpense: actionResolvers.FindFirstExpenseResolver,
    expenses: actionResolvers.FindManyExpenseResolver,
    createExpense: actionResolvers.CreateExpenseResolver,
    createManyExpense: actionResolvers.CreateManyExpenseResolver,
    deleteExpense: actionResolvers.DeleteExpenseResolver,
    updateExpense: actionResolvers.UpdateExpenseResolver,
    deleteManyExpense: actionResolvers.DeleteManyExpenseResolver,
    updateManyExpense: actionResolvers.UpdateManyExpenseResolver,
    upsertExpense: actionResolvers.UpsertExpenseResolver,
    aggregateExpense: actionResolvers.AggregateExpenseResolver,
    groupByExpense: actionResolvers.GroupByExpenseResolver
  },
  Occurrence: {
    occurrence: actionResolvers.FindUniqueOccurrenceResolver,
    findFirstOccurrence: actionResolvers.FindFirstOccurrenceResolver,
    occurrences: actionResolvers.FindManyOccurrenceResolver,
    createOccurrence: actionResolvers.CreateOccurrenceResolver,
    createManyOccurrence: actionResolvers.CreateManyOccurrenceResolver,
    deleteOccurrence: actionResolvers.DeleteOccurrenceResolver,
    updateOccurrence: actionResolvers.UpdateOccurrenceResolver,
    deleteManyOccurrence: actionResolvers.DeleteManyOccurrenceResolver,
    updateManyOccurrence: actionResolvers.UpdateManyOccurrenceResolver,
    upsertOccurrence: actionResolvers.UpsertOccurrenceResolver,
    aggregateOccurrence: actionResolvers.AggregateOccurrenceResolver,
    groupByOccurrence: actionResolvers.GroupByOccurrenceResolver
  }
};
const crudResolversInfo = {
  IncomeOrigin: ["incomeOrigin", "findFirstIncomeOrigin", "incomeOrigins", "createIncomeOrigin", "createManyIncomeOrigin", "deleteIncomeOrigin", "updateIncomeOrigin", "deleteManyIncomeOrigin", "updateManyIncomeOrigin", "upsertIncomeOrigin", "aggregateIncomeOrigin", "groupByIncomeOrigin"],
  Income: ["income", "findFirstIncome", "incomes", "createIncome", "createManyIncome", "deleteIncome", "updateIncome", "deleteManyIncome", "updateManyIncome", "upsertIncome", "aggregateIncome", "groupByIncome"],
  Expense: ["expense", "findFirstExpense", "expenses", "createExpense", "createManyExpense", "deleteExpense", "updateExpense", "deleteManyExpense", "updateManyExpense", "upsertExpense", "aggregateExpense", "groupByExpense"],
  Occurrence: ["occurrence", "findFirstOccurrence", "occurrences", "createOccurrence", "createManyOccurrence", "deleteOccurrence", "updateOccurrence", "deleteManyOccurrence", "updateManyOccurrence", "upsertOccurrence", "aggregateOccurrence", "groupByOccurrence"]
};
const argsInfo = {
  FindUniqueIncomeOriginArgs: ["where"],
  FindFirstIncomeOriginArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIncomeOriginArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateIncomeOriginArgs: ["data"],
  CreateManyIncomeOriginArgs: ["data", "skipDuplicates"],
  DeleteIncomeOriginArgs: ["where"],
  UpdateIncomeOriginArgs: ["data", "where"],
  DeleteManyIncomeOriginArgs: ["where"],
  UpdateManyIncomeOriginArgs: ["data", "where"],
  UpsertIncomeOriginArgs: ["where", "create", "update"],
  AggregateIncomeOriginArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByIncomeOriginArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueIncomeArgs: ["where"],
  FindFirstIncomeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyIncomeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateIncomeArgs: ["data"],
  CreateManyIncomeArgs: ["data", "skipDuplicates"],
  DeleteIncomeArgs: ["where"],
  UpdateIncomeArgs: ["data", "where"],
  DeleteManyIncomeArgs: ["where"],
  UpdateManyIncomeArgs: ["data", "where"],
  UpsertIncomeArgs: ["where", "create", "update"],
  AggregateIncomeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByIncomeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueExpenseArgs: ["where"],
  FindFirstExpenseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExpenseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateExpenseArgs: ["data"],
  CreateManyExpenseArgs: ["data", "skipDuplicates"],
  DeleteExpenseArgs: ["where"],
  UpdateExpenseArgs: ["data", "where"],
  DeleteManyExpenseArgs: ["where"],
  UpdateManyExpenseArgs: ["data", "where"],
  UpsertExpenseArgs: ["where", "create", "update"],
  AggregateExpenseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByExpenseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOccurrenceArgs: ["where"],
  FindFirstOccurrenceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOccurrenceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOccurrenceArgs: ["data"],
  CreateManyOccurrenceArgs: ["data", "skipDuplicates"],
  DeleteOccurrenceArgs: ["where"],
  UpdateOccurrenceArgs: ["data", "where"],
  DeleteManyOccurrenceArgs: ["where"],
  UpdateManyOccurrenceArgs: ["data", "where"],
  UpsertOccurrenceArgs: ["where", "create", "update"],
  AggregateOccurrenceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOccurrenceArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  IncomeOrigin: relationResolvers.IncomeOriginRelationsResolver,
  Income: relationResolvers.IncomeRelationsResolver,
  Expense: relationResolvers.ExpenseRelationsResolver,
  Occurrence: relationResolvers.OccurrenceRelationsResolver
};
const relationResolversInfo = {
  IncomeOrigin: ["incomes"],
  Income: ["IncomeOrigin", "Occurrence"],
  Expense: ["Occurrence"],
  Occurrence: ["expenses", "incomes"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  IncomeOrigin: ["id", "name", "description", "createdAt", "updatedAt"],
  Income: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  Expense: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  Occurrence: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateIncomeOrigin: ["_count", "_min", "_max"],
  IncomeOriginGroupBy: ["id", "name", "description", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateIncome: ["_count", "_min", "_max"],
  IncomeGroupBy: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId", "_count", "_min", "_max"],
  AggregateExpense: ["_count", "_avg", "_sum", "_min", "_max"],
  ExpenseGroupBy: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOccurrence: ["_count", "_min", "_max"],
  OccurrenceGroupBy: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  IncomeOriginCount: ["incomes"],
  IncomeOriginCountAggregate: ["id", "name", "description", "createdAt", "updatedAt", "_all"],
  IncomeOriginMinAggregate: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeOriginMaxAggregate: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeCountAggregate: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId", "_all"],
  IncomeMinAggregate: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  IncomeMaxAggregate: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  ExpenseCountAggregate: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId", "_all"],
  ExpenseAvgAggregate: ["amount"],
  ExpenseSumAggregate: ["amount"],
  ExpenseMinAggregate: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  ExpenseMaxAggregate: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  OccurrenceCount: ["expenses", "incomes"],
  OccurrenceCountAggregate: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "_all"],
  OccurrenceMinAggregate: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  OccurrenceMaxAggregate: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  IncomeOriginWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt", "incomes"],
  IncomeOriginOrderByWithRelationInput: ["id", "name", "description", "createdAt", "updatedAt", "incomes"],
  IncomeOriginWhereUniqueInput: ["id"],
  IncomeOriginOrderByWithAggregationInput: ["id", "name", "description", "createdAt", "updatedAt", "_count", "_max", "_min"],
  IncomeOriginScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "createdAt", "updatedAt"],
  IncomeWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "IncomeOrigin", "incomeOriginId", "Occurrence", "occurrenceId"],
  IncomeOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "IncomeOrigin", "incomeOriginId", "Occurrence", "occurrenceId"],
  IncomeWhereUniqueInput: ["id"],
  IncomeOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId", "_count", "_max", "_min"],
  IncomeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  ExpenseWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "Occurrence", "occurrenceId"],
  ExpenseOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "Occurrence", "occurrenceId"],
  ExpenseWhereUniqueInput: ["id"],
  ExpenseOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId", "_count", "_avg", "_max", "_min", "_sum"],
  ExpenseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  OccurrenceWhereInput: ["AND", "OR", "NOT", "id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "expenses", "incomes"],
  OccurrenceOrderByWithRelationInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "expenses", "incomes"],
  OccurrenceWhereUniqueInput: ["id"],
  OccurrenceOrderByWithAggregationInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "_count", "_max", "_min"],
  OccurrenceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  IncomeOriginCreateInput: ["id", "name", "description", "createdAt", "updatedAt", "incomes"],
  IncomeOriginUpdateInput: ["id", "name", "description", "createdAt", "updatedAt", "incomes"],
  IncomeOriginCreateManyInput: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeOriginUpdateManyMutationInput: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeCreateInput: ["id", "createdAt", "updatedAt", "IncomeOrigin", "Occurrence"],
  IncomeUpdateInput: ["id", "createdAt", "updatedAt", "IncomeOrigin", "Occurrence"],
  IncomeCreateManyInput: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  IncomeUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  ExpenseCreateInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "Occurrence"],
  ExpenseUpdateInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "Occurrence"],
  ExpenseCreateManyInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  ExpenseUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt"],
  OccurrenceCreateInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "expenses", "incomes"],
  OccurrenceUpdateInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "expenses", "incomes"],
  OccurrenceCreateManyInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  OccurrenceUpdateManyMutationInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IncomeListRelationFilter: ["every", "some", "none"],
  IncomeOrderByRelationAggregateInput: ["_count"],
  IncomeOriginCountOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeOriginMaxOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeOriginMinOrderByAggregateInput: ["id", "name", "description", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IncomeOriginRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  OccurrenceRelationFilter: ["is", "isNot"],
  IncomeCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  IncomeMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  IncomeMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumExpenseCategoryFilter: ["equals", "in", "notIn", "not"],
  ExpenseCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  ExpenseAvgOrderByAggregateInput: ["amount"],
  ExpenseMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  ExpenseMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  ExpenseSumOrderByAggregateInput: ["amount"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumExpenseCategoryWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  ExpenseListRelationFilter: ["every", "some", "none"],
  ExpenseOrderByRelationAggregateInput: ["_count"],
  OccurrenceCountOrderByAggregateInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  OccurrenceMaxOrderByAggregateInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  OccurrenceMinOrderByAggregateInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt"],
  IncomeCreateNestedManyWithoutIncomeOriginInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  IncomeUpdateManyWithoutIncomeOriginInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IncomeOriginCreateNestedOneWithoutIncomesInput: ["create", "connectOrCreate", "connect"],
  OccurrenceCreateNestedOneWithoutIncomesInput: ["create", "connectOrCreate", "connect"],
  IncomeOriginUpdateOneWithoutIncomesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  OccurrenceUpdateOneWithoutIncomesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  OccurrenceCreateNestedOneWithoutExpensesInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumExpenseCategoryFieldUpdateOperationsInput: ["set"],
  OccurrenceUpdateOneWithoutExpensesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ExpenseCreateNestedManyWithoutOccurrenceInput: ["create", "connectOrCreate", "createMany", "connect"],
  IncomeCreateNestedManyWithoutOccurrenceInput: ["create", "connectOrCreate", "createMany", "connect"],
  ExpenseUpdateManyWithoutOccurrenceInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IncomeUpdateManyWithoutOccurrenceInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumExpenseCategoryFilter: ["equals", "in", "notIn", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedEnumExpenseCategoryWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IncomeCreateWithoutIncomeOriginInput: ["id", "createdAt", "updatedAt", "Occurrence"],
  IncomeCreateOrConnectWithoutIncomeOriginInput: ["where", "create"],
  IncomeCreateManyIncomeOriginInputEnvelope: ["data", "skipDuplicates"],
  IncomeUpsertWithWhereUniqueWithoutIncomeOriginInput: ["where", "update", "create"],
  IncomeUpdateWithWhereUniqueWithoutIncomeOriginInput: ["where", "data"],
  IncomeUpdateManyWithWhereWithoutIncomeOriginInput: ["where", "data"],
  IncomeScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "incomeOriginId", "occurrenceId"],
  IncomeOriginCreateWithoutIncomesInput: ["id", "name", "description", "createdAt", "updatedAt"],
  IncomeOriginCreateOrConnectWithoutIncomesInput: ["where", "create"],
  OccurrenceCreateWithoutIncomesInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "expenses"],
  OccurrenceCreateOrConnectWithoutIncomesInput: ["where", "create"],
  IncomeOriginUpsertWithoutIncomesInput: ["update", "create"],
  IncomeOriginUpdateWithoutIncomesInput: ["id", "name", "description", "createdAt", "updatedAt"],
  OccurrenceUpsertWithoutIncomesInput: ["update", "create"],
  OccurrenceUpdateWithoutIncomesInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "expenses"],
  OccurrenceCreateWithoutExpensesInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "incomes"],
  OccurrenceCreateOrConnectWithoutExpensesInput: ["where", "create"],
  OccurrenceUpsertWithoutExpensesInput: ["update", "create"],
  OccurrenceUpdateWithoutExpensesInput: ["id", "description", "startsAt", "endsAt", "createdAt", "updatedAt", "incomes"],
  ExpenseCreateWithoutOccurrenceInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt"],
  ExpenseCreateOrConnectWithoutOccurrenceInput: ["where", "create"],
  ExpenseCreateManyOccurrenceInputEnvelope: ["data", "skipDuplicates"],
  IncomeCreateWithoutOccurrenceInput: ["id", "createdAt", "updatedAt", "IncomeOrigin"],
  IncomeCreateOrConnectWithoutOccurrenceInput: ["where", "create"],
  IncomeCreateManyOccurrenceInputEnvelope: ["data", "skipDuplicates"],
  ExpenseUpsertWithWhereUniqueWithoutOccurrenceInput: ["where", "update", "create"],
  ExpenseUpdateWithWhereUniqueWithoutOccurrenceInput: ["where", "data"],
  ExpenseUpdateManyWithWhereWithoutOccurrenceInput: ["where", "data"],
  ExpenseScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt", "occurrenceId"],
  IncomeUpsertWithWhereUniqueWithoutOccurrenceInput: ["where", "update", "create"],
  IncomeUpdateWithWhereUniqueWithoutOccurrenceInput: ["where", "data"],
  IncomeUpdateManyWithWhereWithoutOccurrenceInput: ["where", "data"],
  IncomeCreateManyIncomeOriginInput: ["id", "createdAt", "updatedAt", "occurrenceId"],
  IncomeUpdateWithoutIncomeOriginInput: ["id", "createdAt", "updatedAt", "Occurrence"],
  ExpenseCreateManyOccurrenceInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt"],
  IncomeCreateManyOccurrenceInput: ["id", "createdAt", "updatedAt", "incomeOriginId"],
  ExpenseUpdateWithoutOccurrenceInput: ["id", "createdAt", "updatedAt", "name", "description", "amount", "category", "paidAt"],
  IncomeUpdateWithoutOccurrenceInput: ["id", "createdAt", "updatedAt", "IncomeOrigin"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

