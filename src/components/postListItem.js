import React from 'react';

const PostListItem = (post) => {

	console.log("post",post.post.postDetails);
return (
		<li>
         <div className="my-3 p-3 bg-white rounded box-shadow">
          <p className="media-body pb-3 mb-0 small lh-125 border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            {post.post.postDetails}
          </p>
        </div>
        </li>
	);
};

export default PostListItem;