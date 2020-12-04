import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allCategories: (_) =>
			getRequest(`${URL}/AllCategories`, ''),
		categoryByName: (_, { body }) =>
			generalRequest(`${URL}/category`, 'GET',body),
		categoryByLevel: (_, { body }) =>
			generalRequest(`${URL}'/levelCategory'`, 'GET',body),
	},
	Mutation: {
		createCategory: (_, { body }) =>
			generalRequest(`${URL}/newCategory`, 'POST', body),
		updateCategory: (_, { body }) =>
			generalRequest(`${URL}/updateCategory`, 'PUT', body),
		deleteCategory: (_, { body }) =>
			generalRequest(`${URL}/deleteCategory`, 'DELETE', body)
	}
};

export default resolvers;
