// increment likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}
// add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}
// remove comment (just need the id of post and the index).
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_CONTENT',
		i: i,
		postId: postId
	}
}