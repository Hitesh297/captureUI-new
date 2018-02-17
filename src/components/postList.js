import React from 'react';
import PostListItem from './postListItem';

const PostList = (props) => {

 const postItems = props.posts.map((post)=>{
 	
	return (
		<PostListItem
		post={post} 
		key={post.postDetails}
		/>
	);
 });

return (
	<ul className="list-unstyled">
      {postItems}
    </ul>
);

};

export default PostList;