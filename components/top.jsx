import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import Rice from "../assets/rice.jpg";
import african from "../assets/african.jpg";
import italian from "../assets/italian.png";
import spanish from "../assets/spanish.jpg";
import React, { useState } from "react";

const Top = () => {
  return (
    <div>
      <Link href={"/"}>
        <nav className="">
          <Image className=" logo" src={Logo} height={100} width={200} />
        </nav>
      </Link>

      <div className="introContainer">
        <div className="introImage">
          <Image
            src={Rice}
            layout="fill"
            className="bannerImage"
            style={{ borderRadius: "10% 10% 47% 51% / 0% 0% 37% 22%" }}
          />
        </div>
        <div className="introduction">
          <h2>My Receipe</h2>
          <h6 style={{ marginTop: "30px", marginBottom: "30px" }}>
            Always Fresh And Delightful
          </h6>

          <Link href={"/search"}>
            <button class="button-87" role="button">
              Search for Receipes
            </button>
          </Link>
        </div>
      </div>

      <div className="foodlinks">
        <Link className="" href="/cuisine/italian">
          <div className="navLink">
            {" "}
            <div className="select cat1">
              <Image src={italian} height={100} width={100}></Image>
            </div>
            <h6>ITALIAN</h6>
          </div>
        </Link>
        <Link href="/cuisine/spanish">
          <div className="navLink">
            {" "}
            <div className="select cat2">
              <Image src={spanish} height={100} width={100}></Image>
            </div>
            <h6>SPANISH</h6>
          </div>
        </Link>
        <Link className="" href="/cuisine/african">
          <div className="navLink">
            {" "}
            <div className="select cat3">
              <Image src={african} height={200} width={100}></Image>
            </div>
            <h6> AFRICAN</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Top;
