import moment from "moment";

export const dateFormatter = (date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const apiFormatter = (date) => {
  return moment(date).format("YYYY-MM-YY");
};
