import PropTypes from 'prop-types'

import s from 'components/Statistics/Statistics.module.css'

const colors = ['#f4f231', '#04d435', '#0f5eff', '#fe86ff', '#fd2bff', '#34fd50', '#d1fe49', '#ffff8f', '#fff603'];
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
 }

export const Statistics = ({lengthStat, stat}) => {
    return (
        <section className={s.statistics}>
            {lengthStat > 0 &&
                <h2 className="title">Upload stats</h2>}
            
                <ul className={s.statList}>
                    {stat.map(item => (
                        <li key={item.id} className={s.item} style={{backgroundColor: getRandomColor()}}>
                            <span className={s.label}>{item.label}</span>
                            <span className="percentage">{item.percentage}%</span>
                        </li>
                    ))}

        
    
                </ul>
            
</section>)
}

Statistics.propTypes = {
    lengthStat: PropTypes.number,
    stat: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}