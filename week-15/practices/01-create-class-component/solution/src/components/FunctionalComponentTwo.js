const FunctionalComponentTwo = (props) => {
  return (
    <>
      <h1>Functional Component Two</h1>

      <div className='two'>
        <h2 className='count'>Count: {props.count}</h2>
        <h2 className='message'>Message: {props.message}</h2>
      </div>
    </>
  );
};

export default FunctionalComponentTwo;
