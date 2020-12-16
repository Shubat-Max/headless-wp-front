import * as React from "react"
import {Container} from "../../Grid";
import styled from "styled-components";


const TopHeader = (props ) => {
  console.log(props)
  return (
      <Container>

      </Container>
)}

// TopHeader.getStaticProps = () => {
//
//   console.log('HERE')
//   //
//   // const data = await getMenu( 'header_bottom_menu' );
//
//   const data = {
//     a: 123,
//     b: 3421
//   }
//
//   return {data};
// }
//
// const getMenu = async ( slug ) => {
//   // const res = await fetch(`http://130.193.62.187/wp-json/rest/v1/menus/header_bottom_menu/`);
//   const res = {
//     a: 123,
//     b: 3421
//   }
//   console.log('----------------------------', res);
//   // const res2 = await res.json();
//   return res;
// }

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = 10
  console.log(paths)
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps() {
  // const res = await fetch(`http://130.193.62.187/wp-json/rest/v1/menus/header_bottom_menu/`)
  // const posts = await res.json()

  return {
    props: {
      data: 'ddds'
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

export default TopHeader