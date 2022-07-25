import PropTypes from 'prop-types'

function Item({marca, lancamento}){
    return(
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.protoTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Que marca?',
    lancamento: 0,
}

export default Item