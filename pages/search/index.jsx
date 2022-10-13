import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Image from "next/image";
const Search = () => {
  const [myInput, setMyInput] = useState("");
  return (
    <div>
      <Link href={"/"}>
        <nav className="">
          <Image className=" logo" src={Logo} height={100} width={200} />
        </nav>
      </Link>

      <div style={{ marginTop: "40px" }}>
        <form action="mt-3">
          <div class="input-group mb-3 ">
            <input
              type="text"
              value={myInput}
              class="form-control shadow-none "
              placeholder="Enter receipe"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setMyInput(e.target.value);
              }}
            />
          </div>
          {myInput !== "" ? (
            <Link href={`/searched/${myInput}`}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Link>
          ) : (
            <Link href={`/searched/${myInput}`}>
              <button className="btn btn-secondary">Submit</button>
            </Link>
          )}
        </form>
        {/* 
        <div className="borderDiv">
          {searched.map((item) => {
            return (
              <NavLink to={"/receipe/" + item.id}>
                <div
                  className="border"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="border-text">{item.title}</div>
                </div>
                <div className="popularItemCard">
                  <p></p>
                </div>
              </NavLink>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Search;
