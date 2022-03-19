const History = ({ history, handleClickMove}) => {
  return (
    <ol>
      {history.map((state, index) => {
        return (
          <li key={state.squares.join('')}>
            <button onClick={() => handleClickMove(index)}>{index === 0 ? 'Game Start' : "Move " + index}</button>
          </li>
        );
      })}
    </ol>
  );
};

export default History;
