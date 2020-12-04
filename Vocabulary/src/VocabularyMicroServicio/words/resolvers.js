import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allWords: (_) =>
			getRequest(`${URL}/AllWords`, ''),
		wordsByName: (_, { body }) =>
			generalRequest(`${URL}/word`, 'GET', body),
		wordsByCategory: (_, { body }) =>
			generalRequest(`${URL}/categoryWord`, 'GET', body),
	},
	Mutation: {
		createWord: (_, { body }) =>
			generalRequest(`${URL}/newWord`, 'POST', body),
		updateWord: (_, { body }) =>
			generalRequest(`${URL}/updateWord`, 'PUT', body),
		deleteWord: (_, { body }) =>
			generalRequest(`${URL}/deleteWord`, 'DELETE', body)
	}
};

export default resolvers;
