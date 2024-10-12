import { useEffect, useState } from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import { sortByDate, sortByLike } from './utils'
import { CommentType } from './type'


// Comment List data
const defaultList: CommentType[] = [{
  rpid: 3,
  user: {
    uid: '13258165',
    avatar: '',
    uname: 'Jay Zhou',
  },
  content: 'Nice, well done',
  ctime: '10-18 08:15',
  like: 88,
}, {
  rpid: 2,
  user: {
    uid: '36080105',
    avatar: '',
    uname: 'Song Xu',
  },
  content: 'I search for you thousands of times, from dawn till dusk.',
  ctime: '11-13 11:29',
  like: 88,
}, {
  rpid: 1,
  user: {
    uid: '30009257',
    avatar,
    uname: 'John',
  },
  content: 'I told my computer I needed a break... now it will not stop sending me vacation ads.',
  ctime: '10-19 09:00',
  like: 66,
},
]

// current logged in user info
const user = {
  // userid
  uid: '30009257',
  // profile
  avatar,
  // username
  uname: 'John',
}

// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
]

const App = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [sorted_comments, setSortedComments] = useState<CommentType[]>([]);
  const [isDateAscending, setDateAscending] = useState(false);
  const [isLikeAscending, setLikeAscending] = useState(false);

  useEffect(() => {
    setComments([...defaultList]);
  }, [])

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            {/* Like */}
            <span className="total-reply">{comments.reduce((i, c) => i + c.like, 0)} </span>
          </li>
          <li className="nav-sort">
            {/* highlight class name： active */}
            <span className={`nav-item ${isLikeAscending ? 'active' : ''}`} onClick={() => {
              setSortedComments(isLikeAscending ? [] : sortByLike(comments))
              setLikeAscending(!isLikeAscending)
            }}>Top</span>
            <span className={`nav-item ${isDateAscending ? 'active' : ''}`} onClick={() => {
              setSortedComments(isDateAscending ? [] : sortByLike(comments))
              setDateAscending(!isDateAscending)
            }}>Newest</span>
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text">post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {
            (sorted_comments.length > 0 ? sorted_comments : defaultList).map((i) => (
              <div className="reply-item" key={i.rpid}>
                {/* profile */}
                <div className="root-reply-avatar">
                  <div className="bili-avatar">
                    <img
                      className="bili-avatar-img"
                      alt=""
                    />
                  </div>
                </div>

                <div className="content-wrap">
                  {/* username */}
                  <div className="user-info">
                    <div className="user-name">{i.user.uname}</div>
                  </div>
                  {/* comment content */}
                  <div className="root-reply">
                    <span className="reply-content">{i.content}</span>
                    <div className="reply-info">
                      {/* comment created time */}
                      <span className="reply-time">{i.ctime}</span>
                      {/* total likes */}
                      <span className="reply-time">Like:{i.like}</span>
                      <span className="delete-btn">
                        Delete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App