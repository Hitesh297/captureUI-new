import React from 'react';

const PostListItem = (blog) => {

	console.log("blog",blog);

	if (blog.post.blogTitle==null) {
return (<div>Empty </div>);
	}

return (
		<li>
         <div className="my-3 p-3 bg-white rounded box-shadow">
          <p className="media-body pb-3 mb-0 small lh-125 border-gray">
            <strong className="d-block text-primary">@username</strong>
          </p>
          <div className=""><b>{blog.post.blogTitle}</b></div>
					<div>{blog.post.blogText}</div>

        </div>
        </li>
	);
};

export default PostListItem;
