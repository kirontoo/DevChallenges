import Input from '../Input';

const InputPage = () => {
  return (
    <>
      <h1>input page</h1>
      <div className="list">
        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input/&gt;</p>
            <Input label="Label" placeholder="Placeholder"></Input>
          </div>
        </div>
      </div>
    </>
  )
}

export { InputPage };
