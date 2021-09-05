import { useEffect, useMemo, useState } from 'react';
import { getUserStats } from '../../api';
import Chart from '../../components/Chart';
import FeaturedInfo from '../../components/FeaturedInfo';
import WidgetLarge from '../../components/WidgetLarge';
import WidgetSmall from '../../components/WidgetSmall';
import { useMovieData } from '../../contexts/movieContext/MovieContext';
import './Home.css';

export default function Home() {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);
  const [state] = useMovieData();
  console.log(state);

  useEffect(() => {
    try {
      getUserStats()
        .then(({ data }) => {
          data.sort((a, b) => {
            return a._id - b._id;
          });
          const stateData = data.map(item => ({
            name: MONTHS[item._id - 1],
            'Active User': item.total,
          }));
          setUserStats(stateData);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [MONTHS]);

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userStats}
        xDatakey='name'
        lineDataKey='Active User'
        title='Sales Analytics'
        grid
      />
      <div className='widgets'>
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
}
