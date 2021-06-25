import { Fragment } from 'react';

export default function IndexList(props) {
  const { lists, user, handleCreate } = props
  console.log('lists')
  return (
    <div>
      <h3>Today I am Grateful For..</h3>
      {lists.map((list) => (
        <Fragment key={list.id}>
          <p>{user.username}</p>
        </Fragment>
      ))}
      
    </div>
  )
}