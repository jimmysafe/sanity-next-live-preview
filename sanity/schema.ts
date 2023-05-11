import { type SchemaTypeDefinition } from "sanity";
import Articles from "./schemas/Articles";

export const schemasList: SchemaTypeDefinition[] = [Articles];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemasList,
};
