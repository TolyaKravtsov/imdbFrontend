import React, { useState } from "react";

import { FilmsInfo } from "../../common/Types";

import { Films } from "./Films";
import { SearchEngine } from "./SearchEngine";

export const ListOfFilms = () => {
  const [searchResult, setSearchResult] = useState({} as FilmsInfo);

  return (
    <>
      <SearchEngine searchResult={searchResult} setSearchResult={setSearchResult} />
      <Films searchResult={searchResult} />
    </>
  );
};
