import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";

const Receipe = ({ info }) => {
  const [active, setActive] = useState("ingredients");
  const router = useRouter();

  return (
    <div className="mb-5">
      <div className="">
        <Link href={"/"}>
          <nav className="">
            <Image className=" logo" src={Logo} height={100} width={200} />
          </nav>
        </Link>
        <div
          className="button btn mt-4 mx-4 btn-danger"
          onClick={() => router.back()}
        >
          Back
        </div>
        <div className="receipe">
          <h3 className="infotitle">{info.title}</h3>
          <div className="receipeContainer">
            <div
              className="left"
              style={{ backgroundImage: `url(${info.image})` }}
            ></div>
            <div className="right">
              <div className="buttons">
                <button
                  className="button-87"
                  onClick={() => setActive("ingredients")}
                >
                  Ingridents
                </button>
                <button
                  className="button-87"
                  onClick={() => setActive("instruction")}
                >
                  Instruction
                </button>
              </div>

              {active === "instruction" && (
                <div>
                  <p
                    className="instruction"
                    dangerouslySetInnerHTML={{ __html: info.summary }}
                  ></p>
                  <p
                    className="instruction"
                    dangerouslySetInnerHTML={{ __html: info.instructions }}
                  ></p>
                </div>
              )}

              {active === "ingredients" &&
                info.extendedIngredients.map((item) => {
                  return <p key={item.id}>{item.original}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipe;

export async function getServerSideProps({ query }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/${query.id}/information?apiKey=3bd7cbbb02ed4166a07cfaf4c5e9b616`
  );
  const info = await data.json();

  return {
    props: {
      info,
    },
  };
}
