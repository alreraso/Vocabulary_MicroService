import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	categoryMutations,
	categoryQueries,
	categoryTypeDef
} from './VocabularyMicroServicio/category/typeDefs';

import{
	wordsMutations,
	wordsQueries,
	wordsTypeDef
} from './VocabularyMicroServicio/words/typeDefs';

import CResolver from './VocabularyMicroServicio/category/resolvers';
import WResolver from './VocabularyMicroServicio/words/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		categoryTypeDef,
		wordsTypeDef
	],
	[
		categoryQueries,
		wordsQueries
	],
	[
		categoryMutations,
		wordsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		CResolver,
		WResolver,

	)
});
