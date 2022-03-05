import {Booking} from "./booking";

export const Bookings: Booking[] = [
  {
    id: 1,
    name: "Jannick Leisman",
    roomNumber: 345,
    startDate: new Date(),
    endDate: new Date("2021-11-21")
  },
  {
    id: 2,
    name: "Max Mustermann",
    roomNumber: 45,
    startDate: new Date("2021-11-25"),
    endDate: new Date("2021-12-01")
  },
  {id: 3,
  name: "John Doe",
  roomNumber: 2,
  startDate: new Date("2021-12-10"),
  endDate: new Date("2021-12-23")
},
{id: 4,
  name: "Maria Doemann",
  roomNumber: 105,
  startDate: new Date("2021-12-23"),
  endDate: new Date("2021-12-25")
}

]
