const Scroll = ({ children }) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid #000', height: '750px'}}>
      { children }
    </div>
  )
}

export default Scroll