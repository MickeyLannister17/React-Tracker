import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
  return (
      <header className='header'>
          <h1>{title}</h1>
          <Button
              text={showAdd ? "Collapse" : "Add"}
              color={showAdd ? 'red' : 'green'} onClick={onAdd} />
          
    </header>
  )
}

Header.defaultProps = {
    title: 'My Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}
// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header