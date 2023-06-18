import { error } from '@sveltejs/kit';
import { vnList } from '../../data';

export function load({ params }) {
	const game = Object.values(vnList.results).find((results: any) => results.id === params.id);

	if (!game) throw error(404);

	return {
		game
	};
}
