import Input from '../Input';

const InputPage = () => {
  return (
    <>
      <h1>input page</h1>
      <div className="list">

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input/&gt;</p>
            <Input label="Label" placeholder="Placeholder" />
          </div>
          <div className="column">
            <p className="list-name hover-text">&:hover</p>
            <Input label="Label" placeholder="Placeholder" />
          </div>
          <div className="column">
            <p className="list-name hover-text">&:focus</p>
            <Input label="Label" placeholder="Placeholder" focus />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input error /&gt;</p>
            <Input label="Label" placeholder="Placeholder" error />
          </div>
          <div className="column">
            <p className="list-name hover-text">&:hover</p>
            <Input label="Label" placeholder="Placeholder" error />
          </div>
          <div className="column">
            <p className="list-name hover-text">&:focus</p>
            <Input label="Label" placeholder="Placeholder" error />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input disabled /&gt;</p>
            <Input label="Label" placeholder="Placeholder" disabled/>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input helperText="Some interesting text" /&gt;</p>
            <Input helperText="Some interesting text" label="Label" placeholder="Placeholder" />
          </div>
          <div className="column">
            <p className="list-name">&lt;Input helperText="Some interesting text" error /&gt;</p>
            <Input helperText="Some interesting text" label="Label" placeholder="Placeholder" error />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input startIcon="mail" /&gt;</p>
            <Input label="Label" placeholder="Placeholder" startIcon="mail"/>
          </div>
          <div className="column">
            <p className="list-name">&lt;Input endIcon="mail" /&gt;</p>
            <Input label="Label" placeholder="Placeholder" endIcon="mail"/>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input value="text" /&gt;</p>
            <Input label="Label" placeholder="Placeholder" value="text"/>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input size="sm" /&gt;</p>
            <Input label="Label" placeholder="Placeholder" size="sm"/>
          </div>
          <div className="column">
            <p className="list-name">&lt;Input size="md" /&gt;</p>
            <Input label="Label" placeholder="Placeholder" size="md"/>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input fullWidth /&gt;</p>
            <Input label="Label" placeholder="Placeholder" fullWidth/>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <p className="list-name">&lt;Input multiline row="4" /&gt;</p>
            <Input label="Label" placeholder="Placeholder" multiline row="4"/>
          </div>
        </div>

      </div>
      </>
  )
}

export { InputPage };
