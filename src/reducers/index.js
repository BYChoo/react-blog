/**
 * reducers
 */

const intialState = {
  curBlog: {
    title: '',
    tag: [],
    content: null
  }
}

export default function store(state = intialState, action) {
  const { type, blog } = action;
  switch (type) {
    case 'SET_CUR_BLOG':
      return {
        curBlog: Object.assign({}, state.curBlog, blog)
      }
    default:
      return {
        curBlog: intialState
      }
  }
}