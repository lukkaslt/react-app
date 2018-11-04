import Saint from './Saint'

const Menu = ({ saints }) =>
  <article>
    <header>
      <h1>Os Santos</h1>
    </header>
    <div className="saints">
      {saints.map((saint, i) =>
        <Saint key={i} {...saint} />)
      }
    </div>
  </article>

export default Menu