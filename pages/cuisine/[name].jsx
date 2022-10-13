import Image from "next/image";
import Link from "next/link";
import Top from "../../components/top";

const Cuisine = ({ cuisinecat }) => {
  const cuisuineData = cuisinecat.results;

  return (
    <div>
      <Top></Top>
      <div className="borderDiv">
        <div className="d-flex flex-wrap popularFlex">
          {" "}
          {cuisuineData.map((item, index) => {
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
  );
};

export default Cuisine;

export async function getServerSideProps({ query }) {
  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=368f52dff8e5459a8e261a862a7aebf8&cuisine=${query.name}`
  );
  const cuisinecat = await data.json();
  return {
    props: {
      cuisinecat,
    },
  };
}
