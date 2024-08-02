// import css from './MonthInfo.module.css';
import Container from 'src/components/REUSABLE/Container/Container.jsx';
import { Calendar } from './Calendar/Calendar';
import { CalendarPagination } from './CalendarPagination/CalendarPagination';

const MonthInfo = () => {
  return (
    <Container type="section" addClass={''}>
      <Calendar />
      <CalendarPagination />
    </Container>
  );
};

export default MonthInfo;
