import { Divider, Input } from "antd";
import { useState } from "react";

const Search = ({essen, setEssen}) => {
    const [currentEssen, setCurrentEssen] = useState('')

    const searchHandler = (event) => {
        setCurrentEssen(event.target.value)

        if (event.target.value === "") {
            setEssen(essen)
        }


    }


    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={currentEssen} type="text" onChange={searchHandler} />
    </>
    );
}
 
export default Search;