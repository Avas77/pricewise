"use client";
import { isValidAmazonUrl } from "@/utils";
import React, { FormEvent, useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const isValidLink = isValidAmazonUrl(search);
    if (!isValidLink) return alert("Please enter valid link");
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex gap-4 mt-12" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="searchbar-input"
        placeholder="Enter Product link"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="searchbar-btn" type="submit" disabled={search === ""}>
        Search
      </button>
    </form>
  );
};

export default Searchbar;
