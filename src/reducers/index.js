/**
 * reducers
 */

const intialState = {
  curBlog: {
    title: '',
    tag: [],
    content: null,
    _id: null
  },
  curBlogDetail: {}
}

export default function store(state = intialState, action) {
  const { type, blog } = action;
  switch (type) {
    case 'SET_CUR_BLOG':
      return {
        curBlog: Object.assign({}, state.curBlog, blog)
      }
      case 'SET_CUR_BLOG_DETAIL':
      return {
        curBlogDetail: Object.assign({}, state.curBlogDetail, blog)
      }
    default:
      return {
        curBlog: intialState
      }
  }
}