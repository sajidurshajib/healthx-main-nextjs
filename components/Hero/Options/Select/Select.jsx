import classes from './Select.module.css'

const Select = (props) => {

    let selectedStyle = {}

    if(props.number === props.id){
        selectedStyle = {color: 'var(--white)', background: 'var(--primary)'}
    }

    return (
        <div className={classes.Select} style={selectedStyle} onClick={()=>props.setId(props.number)} >
            <div className={classes.SelectWrapper}>
                {props.children}
            </div>
        </div>)
}

export default Select