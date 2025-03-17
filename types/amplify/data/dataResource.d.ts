import { type ClientSchema } from "@aws-amplify/backend";
declare const schema: import("@aws-amplify/data-schema").ModelSchema<{
    types: {
        Todo: import("@aws-amplify/data-schema").ModelType<import("@aws-amplify/data-schema-types").SetTypeSubArg<{
            fields: {
                content: import("@aws-amplify/data-schema").ModelField<import("@aws-amplify/data-schema").Nullable<string>, never, undefined>;
            };
            identifier: import("@aws-amplify/data-schema").ModelDefaultIdentifier;
            secondaryIndexes: [];
            authorization: [];
            disabledOperations: [];
        }, "authorization", (import("@aws-amplify/data-schema").Authorization<"public", undefined, false> & {
            to: <SELF extends import("@aws-amplify/data-schema").Authorization<any, any, any>>(this: SELF, operations: import("@aws-amplify/data-schema/dist/esm/Authorization").Operation[]) => Omit<SELF, "to">;
        })[]>, "authorization">;
    };
    authorization: [];
    configuration: any;
}, never>;
export type Schema = ClientSchema<typeof schema>;
export declare const data: import("@aws-amplify/plugin-types").ConstructFactory<import("@aws-amplify/graphql-api-construct").AmplifyGraphqlApi>;
export {};
