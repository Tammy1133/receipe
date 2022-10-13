import Link from "next/link";
import Image from "next/image";

const Veggies = ({ veggies }) => {
  const { recipes } = veggies;
  return (
    <div style={{ marginTop: "110px" }}>
      <div className=" popular pop">
        <h3 className="popularHead popularHeader " style={{ color: "green" }}>
          VEGGIES
        </h3>

        <div className="borderDiv">
          <div className="d-flex flex-wrap popularFlex">
            {recipes.map((item, index) => {
              return (
                <div class="first hero" key={index}>
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

export default Veggies;
