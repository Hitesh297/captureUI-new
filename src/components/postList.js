import React from 'react';
import PostListItem from './postListItem';

const PostList = ({posts}) => {
console.log("posts loop", posts);


 const postItems = posts.map((blog)=>{

	return (
		<PostListItem
		post={blog}
		key={blog.blogTitle}
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
