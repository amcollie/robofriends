const Card = ({ username, name, email }) => {

  return (
    <section className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${username}?200x200`} alt={ name } />
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </section>
  )
}

export default Card