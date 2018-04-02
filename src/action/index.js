/**
 * action
 */

export const setCurBlog = (blog) => {
  return {
    type: 'SET_CUR_BLOG',
    blog
  }
}

export const setCurBlogDetail = (blog) => {
  return {
    type: 'SET_CUR_BLOG_DETAIL',
    blog
  }
}
