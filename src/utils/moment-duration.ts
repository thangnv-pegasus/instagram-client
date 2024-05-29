import moment from "moment";

export const durationMoment = (d: Date) => {
  const now = moment();

  const duration = moment.duration(now.diff(d));
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();
  let result = '';
  if(years > 0) {
    result = years + ' năm trước'
  }else if(months > 0){
    result = months + ' tháng trước'
  }else if(days > 0){
    result = days + ' ngày trước'
  }else if(hours > 0){
    result = hours + ' giờ trước'
  }else if(minutes > 0){
    result = minutes + ' phút trước'
  }else{
    result = seconds + ' giây trước'
  }
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    result
  };
};
