import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Popular from "../components/popular";
import Top from "../components/top";
import Veggies from "../components/veggies";
import styles from "../styles/Home.module.css";
import ScrollToTop from "react-scroll-to-top";

export default function Home({ popular, veggies }) {
  return (
    <div>
      <Top></Top>
      <Popular popular={popular}></Popular>
      <Veggies veggies={veggies}></Veggies>
      <Footer></Footer>
      <ScrollToTop smooth />
    </div>
  );
}

export async function getServerSideProps() {
  const dataForPopular = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=dc93b5a2b92f4857ae5078786ff9287e&number=6`
  );
  const popular = await dataForPopular.json();
  const dataForVeggies = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=dc93b5a2b92f4857ae5078786ff9287e&number=6&tags=vegetarian`
  );
  const veggies = await dataForVeggies.json();

  return {
    props: {
      popular,
      veggies,
    },
  };
}
