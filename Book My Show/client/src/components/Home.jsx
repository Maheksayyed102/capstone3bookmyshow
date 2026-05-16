import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import SelectMovie from "./SelectMovie";
import SelectTimeSlot from "./SelectTimeSlot";
import SelectSeats from "./SelectSeats";
import LastBookingDetails from "./LastBookingDetails";
import { movies, seats, slots } from "./data";
import useLocalStorage from "./UseLocalStorage";
import axios from "axios";

// validation on negative numbers for seat input
function containNegativeVal(seats) {
  return Object.values(seats).some((val) => val < 0);
}

const initialState = {
  movie: "",
  timeSlots: "",
  seats: {
    a1: 0,
    a2: 0,
    a3: 0,
    a4: 0,
    d1: 0,
    d2: 0,
  },
};

const Home = () => {
  const [state, setState] = useLocalStorage("state", initialState);

  const [lastBooking, setLastBooking] = useState({
    movie: "",
    timeSlots: "",
    isFinishLoading: false,
    dataPresent: false,
    isLoading: false,
    error: null,
    seats: {
      a1: 0,
      a2: 0,
      a3: 0,
      a4: 0,
      d1: 0,
      d2: 0,
    },
  });

  // 🔹 Fetch last booking
  useEffect(() => {
    setLastBooking((prev) => ({
      ...prev,
      isFinishLoading: false,
    }));

    axios
      .get("http://localhost:8080/api/booking")
      .then((res) => {
        if (typeof res.data.message === "string") {
          setLastBooking((prev) => ({
            ...prev,
            error: res.data.message,
            isFinishLoading: true,
            dataPresent: false,
          }));
        } else if (res.data.data) {
          let { movie, slot, seats } = res.data.data;

          setLastBooking((prev) => ({
            ...prev,
            movie,
            timeSlots: slot,
            dataPresent: true,
            isFinishLoading: true,
            seats: {
              a1: seats.A1 || 0,
              a2: seats.A2 || 0,
              a3: seats.A3 || 0,
              a4: seats.A4 || 0,
              d1: seats.D1 || 0,
              d2: seats.D2 || 0,
            },
            error: null,
          }));
        } else {
          setLastBooking((prev) => ({
            ...prev,
            dataPresent: false,
            isFinishLoading: true,
          }));
        }
      })
      .catch(() => {
        setLastBooking((prev) => ({
          ...prev,
          dataPresent: false,
          isFinishLoading: true,
          error: "Failed to fetch booking data",
        }));
      });
  }, []);

  // 🔹 Movie select
  const movieSelectHandler = (item) => {
    setState((prev) => ({
      ...prev,
      movie: item,
    }));
  };

  // 🔹 Time slot select
  const timeSlotSelectHandler = (item) => {
    setState((prev) => ({
      ...prev,
      timeSlots: item,
    }));
  };

  // 🔹 Seat select
  const seatSelectHandler = (e) => {
    setState((prev) => ({
      ...prev,
      seats: {
        ...prev.seats,
        [e.target.name]: Number(e.target.value),
      },
    }));
  };

  // 🔹 Submit booking
  const submitBooking = (e) => {
    if (e) e.preventDefault();

    const { movie, timeSlots, seats } = state;

    const notSelectedAnySeat = Object.values(seats).every(
      (val) => val === 0
    );

    if (!movie) {
      enqueueSnackbar("Please Select a movie", { variant: "error" });
      return;
    }

    if (!timeSlots) {
      enqueueSnackbar("Please Select a time slot", { variant: "error" });
      return;
    }

    if (notSelectedAnySeat) {
      enqueueSnackbar("Please Select Atleast one seat", {
        variant: "error",
      });
      return;
    }

    if (containNegativeVal(seats)) {
      enqueueSnackbar("Invalid Seat Entered", {
        variant: "error",
      });
      return;
    }

    setLastBooking((prev) => ({
      ...prev,
      isLoading: true,
    }));

    axios
      .post("http://localhost:8080/api/booking", {
        movie: state.movie,
        slot: state.timeSlots,
        seats: {
          A1: state.seats.a1,
          A2: state.seats.a2,
          A3: state.seats.a3,
          A4: state.seats.a4,
          D1: state.seats.d1,
          D2: state.seats.d2,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLastBooking((prev) => ({
            ...prev,
            movie: state.movie,
            timeSlots: state.timeSlots,
            dataPresent: true,
            isFinishLoading: true,
            isLoading: false,
            seats: { ...state.seats },
          }));

          setState(initialState);

          enqueueSnackbar("Booking successful!", {
            variant: "success",
          });
        }
      })
      .catch(() => {
        setLastBooking((prev) => ({
          ...prev,
          isLoading: false,
          error: "Booking failed",
        }));

        enqueueSnackbar("Booking failed!", {
          variant: "error",
        });
      });
  };

  return (
    <Container className="mt-5 bg-custom">
      <SnackbarProvider />

      {/* Heading */}
      <Row>
        <Col className="p-3">
          <h3>Book My Show!!</h3>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <SelectMovie
            mainHeading="Select a Movie"
            items={movies}
            selectedValue={state.movie}
            onClick={movieSelectHandler}
          />

          <SelectTimeSlot
            mainHeading="Select a Time Slot"
            items={slots}
            selectedValue={state.timeSlots}
            onClick={timeSlotSelectHandler}
          />

          <SelectSeats
            mainHeading="Select Seats"
            items={seats}
            seats={state.seats}
            onChange={seatSelectHandler}
            submitBooking={submitBooking}
          />
        </Col>

        <Col md={4} className="text-center">
          <LastBookingDetails
            movieName={lastBooking.movie}
            finishLoading={lastBooking.isFinishLoading}
            timing={lastBooking.timeSlots}
            seat={lastBooking.seats}
            lastBookingPresent={lastBooking.dataPresent}
            errorMsg={lastBooking.error}
            loading={lastBooking.isLoading}
          />
        </Col>
      </Row>
    </Container>
  );
};
<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> c4f817ac16f4590f6895de0ae4f43e00085a5e85
