import React, {useState, useEffect} from "react";
import { listAllWatchLists } from "../utils/api";

function WatchList() {
    const [allWatchLists, setAllWatchLists] = useState([]);
    // const [allWatchListsError, setAllWatchListsError] = useState(null);

    useEffect(loadAllWatchLists, []);

    function loadAllWatchLists() {
        const abortController = new AbortController();
        // setAllWatchListsError(null);
        listAllWatchLists(abortController.signal)
            .then(data => setAllWatchLists(data))
            .catch()
        return () => abortController.abort();
    }

    const allWatchListsRows = allWatchLists.map(({watchList_id, watchList_name, movie_ids, user_id}) => (
    <tr key={watchList_id}>
      <th scope="row">{watchList_id}</th>
      <td>{watchList_name}</td>
      <td>{movie_ids}</td>
      <td>{user_id}</td>
    </tr>
    ))

    return (
        <table className="table">
          <thead>
            <tr className="table-danger" >
              <th scope="col">Watch List #</th>
              <th scope="col">Watch List Name</th>
              <th scope="col">Movies</th>
              <th scope="col">User</th>
            </tr>
          </thead>
          <tbody>
            {allWatchListsRows}
          </tbody>
        </table>
    )
}

export default WatchList;