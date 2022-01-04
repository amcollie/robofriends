import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <section>
      {
        robots.map(robot => <Card key={robot.id} { ...robot } />)
      }
    </section>
  )
}

export default CardList