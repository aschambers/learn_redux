// increment likes, all you need is the identifier, want to send as little info as possible, could be postId as well.
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}
// add comment, need to know what postId, author who commented, and what comment they made!
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