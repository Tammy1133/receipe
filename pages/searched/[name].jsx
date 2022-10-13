import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import { useRouter } from "next/router";

const Searched = ({ results }) => {
  const [myInput, setMyInput] = useState("");
  const router = useRouter();
  return (
    <div>
      <Link href={"/"}>
        <nav className="">
          <Image className=" logo" src={Logo} height={100} width={200} />
        </nav>
      </Link>

      <div>
        <div
          className="button btn mt-4 mx-4 btn-danger"
          onClick={() => router.back()}
        >
          Back
        </div>
        <form action="">
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

        <div style={{ marginTop: "50px" }}>
          <div className="d-flex flex-wrap popularFlex">
            {results.results.map((item, index) => {
              return (
                <div class="first hero " key={index}>
                  <Image
                    src={item.image}
                    layout="intrinsic"
                    height={300}
                    width={500}
                  ></Image>
                  <div class="hero-description-bk"></div>

                  <div class="hero-description">
                    <p>{item?.sourceName && `Source: ${item.sourceName} `}</p>
                  </div>
                  <div class="hero-date">
                    <p style={{ width: "110px" }}>
                      {`${item.title.split(" ").slice(0, 5).join(" ")}....`}
                    </p>
                  </div>
                  <Link href={"/receipe/" + item.id}>
                    <div class="hero-btn">
                      <a href="#">Learn More</a>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searched;

export async function getServerSideProps({ query }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=3bd7cbbb02ed4166a07cfaf4c5e9b616&query=${query.name}`
  );
  const results = await data.json();
  return {
    props: {
      results,
    },
  };
}
