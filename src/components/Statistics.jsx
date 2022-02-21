import { StatisticsList } from 'components/StatisticsList';
import data from 'data.json';

export const Statistics = () => {
    return (
        <section className="statistics">
            {data.length > 0 &&
                <h2 className="title">Upload stats</h2>}
            
                <ul className="stat-list">
                    {data.map(item => (
                        <li key={item.id}>
                            <StatisticsList
                                label={item.label}
                                percentage={item.percentage}
                            />
                        </li>
                    ))}

        
    
                </ul>
            
</section>)
}