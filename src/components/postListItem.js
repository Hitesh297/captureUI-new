import React from 'react';

const PostListItem = (post) => {

	console.log("post",post.post);
	
return (
		<li>
         <div className="my-3 p-3 bg-white rounded box-shadow">
          <p className="media-body pb-3 mb-0 small lh-125 border-gray">
            <strong className="d-block text-primary">@username</strong>
          </p>
          <div>{post.post.postDetails}</div>
          {post.post.imageUrl != null &&
          <img src={post.post.imageUrl} className=" img-thumbnail" width="150" height="150"/>}
        </div>
        </li>
	);
};

export default PostListItem;