import { Fragment } from 'react';

export default function IndexList(props) {
  const { lists, currentUser, handleCreate } = props
  console.log('lists')
  return (
    <div>
      <h3>Today I am Grateful For..</h3>
      {lists.map((list) => (
        <Fragment key={list.id}>
          <p>{currentUser.username}</p>
          <p>{currentUser.input_1}</p>
        </Fragment>
      ))}
      
    </div>
  )
}