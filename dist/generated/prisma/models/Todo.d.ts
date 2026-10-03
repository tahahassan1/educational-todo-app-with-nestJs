import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TodoModel = runtime.Types.Result.DefaultSelection<Prisma.$TodoPayload>;
export type AggregateTodo = {
    _count: TodoCountAggregateOutputType | null;
    _avg: TodoAvgAggregateOutputType | null;
    _sum: TodoSumAggregateOutputType | null;
    _min: TodoMinAggregateOutputType | null;
    _max: TodoMaxAggregateOutputType | null;
};
export type TodoAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type TodoSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type TodoMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    isDone: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: number | null;
};
export type TodoMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    isDone: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: number | null;
};
export type TodoCountAggregateOutputType = {
    id: number;
    title: number;
    isDone: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
};
export type TodoAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type TodoSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type TodoMinAggregateInputType = {
    id?: true;
    title?: true;
    isDone?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type TodoMaxAggregateInputType = {
    id?: true;
    title?: true;
    isDone?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
};
export type TodoCountAggregateInputType = {
    id?: true;
    title?: true;
    isDone?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
};
export type TodoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithRelationInput | Prisma.TodoOrderByWithRelationInput[];
    cursor?: Prisma.TodoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TodoCountAggregateInputType;
    _avg?: TodoAvgAggregateInputType;
    _sum?: TodoSumAggregateInputType;
    _min?: TodoMinAggregateInputType;
    _max?: TodoMaxAggregateInputType;
};
export type GetTodoAggregateType<T extends TodoAggregateArgs> = {
    [P in keyof T & keyof AggregateTodo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTodo[P]> : Prisma.GetScalarType<T[P], AggregateTodo[P]>;
};
export type TodoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithAggregationInput | Prisma.TodoOrderByWithAggregationInput[];
    by: Prisma.TodoScalarFieldEnum[] | Prisma.TodoScalarFieldEnum;
    having?: Prisma.TodoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TodoCountAggregateInputType | true;
    _avg?: TodoAvgAggregateInputType;
    _sum?: TodoSumAggregateInputType;
    _min?: TodoMinAggregateInputType;
    _max?: TodoMaxAggregateInputType;
};
export type TodoGroupByOutputType = {
    id: number;
    title: string;
    isDone: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    _count: TodoCountAggregateOutputType | null;
    _avg: TodoAvgAggregateOutputType | null;
    _sum: TodoSumAggregateOutputType | null;
    _min: TodoMinAggregateOutputType | null;
    _max: TodoMaxAggregateOutputType | null;
};
export type GetTodoGroupByPayload<T extends TodoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TodoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TodoGroupByOutputType[P]>;
}>>;
export type TodoWhereInput = {
    AND?: Prisma.TodoWhereInput | Prisma.TodoWhereInput[];
    OR?: Prisma.TodoWhereInput[];
    NOT?: Prisma.TodoWhereInput | Prisma.TodoWhereInput[];
    id?: Prisma.IntFilter<"Todo"> | number;
    title?: Prisma.StringFilter<"Todo"> | string;
    isDone?: Prisma.BoolFilter<"Todo"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Todo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Todo"> | Date | string;
    userId?: Prisma.IntFilter<"Todo"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TodoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TodoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TodoWhereInput | Prisma.TodoWhereInput[];
    OR?: Prisma.TodoWhereInput[];
    NOT?: Prisma.TodoWhereInput | Prisma.TodoWhereInput[];
    title?: Prisma.StringFilter<"Todo"> | string;
    isDone?: Prisma.BoolFilter<"Todo"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Todo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Todo"> | Date | string;
    userId?: Prisma.IntFilter<"Todo"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type TodoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.TodoCountOrderByAggregateInput;
    _avg?: Prisma.TodoAvgOrderByAggregateInput;
    _max?: Prisma.TodoMaxOrderByAggregateInput;
    _min?: Prisma.TodoMinOrderByAggregateInput;
    _sum?: Prisma.TodoSumOrderByAggregateInput;
};
export type TodoScalarWhereWithAggregatesInput = {
    AND?: Prisma.TodoScalarWhereWithAggregatesInput | Prisma.TodoScalarWhereWithAggregatesInput[];
    OR?: Prisma.TodoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TodoScalarWhereWithAggregatesInput | Prisma.TodoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Todo"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Todo"> | string;
    isDone?: Prisma.BoolWithAggregatesFilter<"Todo"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Todo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Todo"> | Date | string;
    userId?: Prisma.IntWithAggregatesFilter<"Todo"> | number;
};
export type TodoCreateInput = {
    title: string;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutTodosInput;
};
export type TodoUncheckedCreateInput = {
    id?: number;
    title: string;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: number;
};
export type TodoUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTodosNestedInput;
};
export type TodoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TodoCreateManyInput = {
    id?: number;
    title: string;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: number;
};
export type TodoUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TodoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TodoListRelationFilter = {
    every?: Prisma.TodoWhereInput;
    some?: Prisma.TodoWhereInput;
    none?: Prisma.TodoWhereInput;
};
export type TodoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TodoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TodoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TodoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TodoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    isDone?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TodoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TodoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TodoCreateWithoutUserInput, Prisma.TodoUncheckedCreateWithoutUserInput> | Prisma.TodoCreateWithoutUserInput[] | Prisma.TodoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TodoCreateOrConnectWithoutUserInput | Prisma.TodoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TodoCreateManyUserInputEnvelope;
    connect?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
};
export type TodoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TodoCreateWithoutUserInput, Prisma.TodoUncheckedCreateWithoutUserInput> | Prisma.TodoCreateWithoutUserInput[] | Prisma.TodoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TodoCreateOrConnectWithoutUserInput | Prisma.TodoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TodoCreateManyUserInputEnvelope;
    connect?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
};
export type TodoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TodoCreateWithoutUserInput, Prisma.TodoUncheckedCreateWithoutUserInput> | Prisma.TodoCreateWithoutUserInput[] | Prisma.TodoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TodoCreateOrConnectWithoutUserInput | Prisma.TodoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TodoUpsertWithWhereUniqueWithoutUserInput | Prisma.TodoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TodoCreateManyUserInputEnvelope;
    set?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    disconnect?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    delete?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    connect?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    update?: Prisma.TodoUpdateWithWhereUniqueWithoutUserInput | Prisma.TodoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TodoUpdateManyWithWhereWithoutUserInput | Prisma.TodoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TodoScalarWhereInput | Prisma.TodoScalarWhereInput[];
};
export type TodoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TodoCreateWithoutUserInput, Prisma.TodoUncheckedCreateWithoutUserInput> | Prisma.TodoCreateWithoutUserInput[] | Prisma.TodoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TodoCreateOrConnectWithoutUserInput | Prisma.TodoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TodoUpsertWithWhereUniqueWithoutUserInput | Prisma.TodoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TodoCreateManyUserInputEnvelope;
    set?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    disconnect?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    delete?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    connect?: Prisma.TodoWhereUniqueInput | Prisma.TodoWhereUniqueInput[];
    update?: Prisma.TodoUpdateWithWhereUniqueWithoutUserInput | Prisma.TodoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TodoUpdateManyWithWhereWithoutUserInput | Prisma.TodoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TodoScalarWhereInput | Prisma.TodoScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type TodoCreateWithoutUserInput = {
    title: string;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TodoUncheckedCreateWithoutUserInput = {
    id?: number;
    title: string;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TodoCreateOrConnectWithoutUserInput = {
    where: Prisma.TodoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TodoCreateWithoutUserInput, Prisma.TodoUncheckedCreateWithoutUserInput>;
};
export type TodoCreateManyUserInputEnvelope = {
    data: Prisma.TodoCreateManyUserInput | Prisma.TodoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TodoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TodoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TodoUpdateWithoutUserInput, Prisma.TodoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TodoCreateWithoutUserInput, Prisma.TodoUncheckedCreateWithoutUserInput>;
};
export type TodoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TodoUpdateWithoutUserInput, Prisma.TodoUncheckedUpdateWithoutUserInput>;
};
export type TodoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TodoScalarWhereInput;
    data: Prisma.XOR<Prisma.TodoUpdateManyMutationInput, Prisma.TodoUncheckedUpdateManyWithoutUserInput>;
};
export type TodoScalarWhereInput = {
    AND?: Prisma.TodoScalarWhereInput | Prisma.TodoScalarWhereInput[];
    OR?: Prisma.TodoScalarWhereInput[];
    NOT?: Prisma.TodoScalarWhereInput | Prisma.TodoScalarWhereInput[];
    id?: Prisma.IntFilter<"Todo"> | number;
    title?: Prisma.StringFilter<"Todo"> | string;
    isDone?: Prisma.BoolFilter<"Todo"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Todo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Todo"> | Date | string;
    userId?: Prisma.IntFilter<"Todo"> | number;
};
export type TodoCreateManyUserInput = {
    id?: number;
    title: string;
    isDone?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TodoUpdateWithoutUserInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TodoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TodoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    isDone?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TodoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["todo"]>;
export type TodoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["todo"]>;
export type TodoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["todo"]>;
export type TodoSelectScalar = {
    id?: boolean;
    title?: boolean;
    isDone?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
};
export type TodoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "isDone" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["todo"]>;
export type TodoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TodoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TodoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TodoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Todo";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        isDone: boolean;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
    }, ExtArgs["result"]["todo"]>;
    composites: {};
};
export type TodoGetPayload<S extends boolean | null | undefined | TodoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TodoPayload, S>;
export type TodoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TodoCountAggregateInputType | true;
};
export interface TodoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Todo'];
        meta: {
            name: 'Todo';
        };
    };
    findUnique<T extends TodoFindUniqueArgs>(args: Prisma.SelectSubset<T, TodoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TodoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TodoFindFirstArgs>(args?: Prisma.SelectSubset<T, TodoFindFirstArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TodoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TodoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TodoFindManyArgs>(args?: Prisma.SelectSubset<T, TodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TodoCreateArgs>(args: Prisma.SelectSubset<T, TodoCreateArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TodoCreateManyArgs>(args?: Prisma.SelectSubset<T, TodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TodoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TodoDeleteArgs>(args: Prisma.SelectSubset<T, TodoDeleteArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TodoUpdateArgs>(args: Prisma.SelectSubset<T, TodoUpdateArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TodoDeleteManyArgs>(args?: Prisma.SelectSubset<T, TodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TodoUpdateManyArgs>(args: Prisma.SelectSubset<T, TodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TodoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TodoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TodoUpsertArgs>(args: Prisma.SelectSubset<T, TodoUpsertArgs<ExtArgs>>): Prisma.Prisma__TodoClient<runtime.Types.Result.GetResult<Prisma.$TodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TodoCountArgs>(args?: Prisma.Subset<T, TodoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TodoCountAggregateOutputType> : number>;
    aggregate<T extends TodoAggregateArgs>(args: Prisma.Subset<T, TodoAggregateArgs>): Prisma.PrismaPromise<GetTodoAggregateType<T>>;
    groupBy<T extends TodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TodoGroupByArgs['orderBy'];
    } : {
        orderBy?: TodoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TodoFieldRefs;
}
export interface Prisma__TodoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TodoFieldRefs {
    readonly id: Prisma.FieldRef<"Todo", 'Int'>;
    readonly title: Prisma.FieldRef<"Todo", 'String'>;
    readonly isDone: Prisma.FieldRef<"Todo", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Todo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Todo", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Todo", 'Int'>;
}
export type TodoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where: Prisma.TodoWhereUniqueInput;
};
export type TodoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where: Prisma.TodoWhereUniqueInput;
};
export type TodoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithRelationInput | Prisma.TodoOrderByWithRelationInput[];
    cursor?: Prisma.TodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TodoScalarFieldEnum | Prisma.TodoScalarFieldEnum[];
};
export type TodoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithRelationInput | Prisma.TodoOrderByWithRelationInput[];
    cursor?: Prisma.TodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TodoScalarFieldEnum | Prisma.TodoScalarFieldEnum[];
};
export type TodoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithRelationInput | Prisma.TodoOrderByWithRelationInput[];
    cursor?: Prisma.TodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TodoScalarFieldEnum | Prisma.TodoScalarFieldEnum[];
};
export type TodoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TodoCreateInput, Prisma.TodoUncheckedCreateInput>;
};
export type TodoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TodoCreateManyInput | Prisma.TodoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TodoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    data: Prisma.TodoCreateManyInput | Prisma.TodoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TodoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TodoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TodoUpdateInput, Prisma.TodoUncheckedUpdateInput>;
    where: Prisma.TodoWhereUniqueInput;
};
export type TodoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TodoUpdateManyMutationInput, Prisma.TodoUncheckedUpdateManyInput>;
    where?: Prisma.TodoWhereInput;
    limit?: number;
};
export type TodoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TodoUpdateManyMutationInput, Prisma.TodoUncheckedUpdateManyInput>;
    where?: Prisma.TodoWhereInput;
    limit?: number;
    include?: Prisma.TodoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TodoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where: Prisma.TodoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TodoCreateInput, Prisma.TodoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TodoUpdateInput, Prisma.TodoUncheckedUpdateInput>;
};
export type TodoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
    where: Prisma.TodoWhereUniqueInput;
};
export type TodoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TodoWhereInput;
    limit?: number;
};
export type TodoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TodoSelect<ExtArgs> | null;
    omit?: Prisma.TodoOmit<ExtArgs> | null;
    include?: Prisma.TodoInclude<ExtArgs> | null;
};
