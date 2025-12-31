"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrice } from "@/store/tokenSlice";

export const useWebSocketMock = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        updatePrice({
          id: "1",
          price: +(Math.random() * 0.05).toFixed(4),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);
};
