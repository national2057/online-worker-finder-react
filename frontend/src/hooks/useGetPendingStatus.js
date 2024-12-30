import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../features/jobSlice";

const useGetPendingStatus = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPendingStatus = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPendingStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetPendingStatus;